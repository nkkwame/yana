import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const JWT_EXPIRES_IN = '24h';
const BCRYPT_ROUNDS = 12;

// Validation schemas
const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  platform: z.string().optional(),
});

const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  platforms: z.array(z.string()).optional(),
});

// Helper functions
async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET);
}

function hasAccess(userPlatforms: string[], requiredPlatform: string): boolean {
  return userPlatforms.includes(requiredPlatform) || userPlatforms.includes('all');
}

// Middleware
function authMiddleware(req: any, res: any, next: any) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.substring(7);
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

/**
 * POST /auth/register
 * Register a new user
 */
router.post('/register', async (req, res) => {
  try {
    const validatedData = RegisterSchema.parse(req.body);
    
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { username: validatedData.username }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({
        error: existingUser.email === validatedData.email 
          ? 'Email already registered' 
          : 'Username already taken'
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(validatedData.password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        username: validatedData.username,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        password: hashedPassword,
        platforms: validatedData.platforms || ['enterprises'],
      },
    });

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      platforms: user.platforms,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        platforms: user.platforms,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.errors 
      });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /auth/login
 * Login user
 */
router.post('/login', async (req, res) => {
  try {
    const validatedData = LoginSchema.parse(req.body);
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await comparePassword(validatedData.password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check platform access
    const requestedPlatform = validatedData.platform || 'enterprises';
    if (!hasAccess(user.platforms, requestedPlatform)) {
      return res.status(403).json({ 
        error: 'Access denied to this platform',
        availablePlatforms: user.platforms 
      });
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      platforms: user.platforms,
      platform: requestedPlatform,
    });

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        platforms: user.platforms,
        role: user.role,
        avatar: user.avatar,
      },
      token,
      platform: requestedPlatform,
    });
  } catch (error) {
    console.error('Login error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.errors 
      });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /auth/logout
 * Logout user
 */
router.post('/logout', authMiddleware, async (req: any, res) => {
  try {
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /auth/me
 * Get current user profile
 */
router.get('/me', authMiddleware, async (req: any, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      include: {
        careProfile: true,
        martSeller: true,
        studiosProfile: true,
      },
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        bio: user.bio,
        platforms: user.platforms,
        role: user.role,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
      },
      profiles: {
        care: user.careProfile,
        mart: user.martSeller,
        studios: user.studiosProfile,
      },
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * PUT /auth/profile
 * Update user profile
 */
router.put('/profile', authMiddleware, async (req: any, res) => {
  try {
    const { firstName, lastName, bio, avatar } = req.body;
    
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(bio && { bio }),
        ...(avatar && { avatar }),
      },
    });

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        username: updatedUser.username,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        avatar: updatedUser.avatar,
        bio: updatedUser.bio,
      },
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /auth/platforms
 * Get available platforms for current user
 */
router.get('/platforms', authMiddleware, async (req: any, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { platforms: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const PLATFORMS = {
      ENTERPRISES: 'enterprises',
      CARE: 'care',
      MART: 'mart',
      LEARN: 'learn',
      STUDIOS: 'studios',
    };

    const platformInfo = Object.entries(PLATFORMS).map(([key, value]) => ({
      key: value,
      name: key.charAt(0) + key.slice(1).toLowerCase(),
      hasAccess: hasAccess(user.platforms, value),
      url: `http://localhost:${getPlatformPort(value)}`,
    }));

    res.json({
      platforms: platformInfo,
      userPlatforms: user.platforms,
    });
  } catch (error) {
    console.error('Platforms fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Helper function to get platform port
 */
function getPlatformPort(platform: string): number {
  const portMap: Record<string, number> = {
    enterprises: 3000,
    care: 3001,
    mart: 3002,
    learn: 3003,
    studios: 3004,
  };
  return portMap[platform] || 3000;
}

export default router;
