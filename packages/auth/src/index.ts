import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Validation schemas
export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  platform: z.string().optional(),
});

export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  platforms: z.array(z.string()).optional(),
});

export const TokenPayload = z.object({
  userId: z.string(),
  email: z.string(),
  username: z.string(),
  role: z.enum(['USER', 'ADMIN', 'MODERATOR']),
  platforms: z.array(z.string()),
  platform: z.string().optional(),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
export type TokenPayloadType = z.infer<typeof TokenPayload>;

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  bcryptRounds: number;
}

export class AuthService {
  private config: AuthConfig;

  constructor(config: AuthConfig) {
    this.config = config;
  }

  /**
   * Hash a password using bcrypt
   */
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.config.bcryptRounds);
  }

  /**
   * Compare a password with its hash
   */
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Generate a JWT token
   */
  generateToken(payload: TokenPayloadType): string {
    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: this.config.jwtExpiresIn,
    });
  }

  /**
   * Verify and decode a JWT token
   */
  verifyToken(token: string): TokenPayloadType {
    try {
      const decoded = jwt.verify(token, this.config.jwtSecret) as any;
      return TokenPayload.parse(decoded);
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  /**
   * Extract token from Authorization header
   */
  extractTokenFromHeader(authHeader: string | undefined): string | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.substring(7);
  }

  /**
   * Check if user has access to a specific platform
   */
  hasAccess(userPlatforms: string[], requiredPlatform: string): boolean {
    return userPlatforms.includes(requiredPlatform) || userPlatforms.includes('all');
  }

  /**
   * Generate a secure session token
   */
  generateSessionToken(): string {
    return jwt.sign(
      { sessionId: this.generateRandomId() },
      this.config.jwtSecret,
      { expiresIn: '7d' }
    );
  }

  /**
   * Generate a random ID for sessions
   */
  private generateRandomId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

/**
 * Middleware types for Express.js
 */
export interface AuthRequest extends Request {
  user?: TokenPayloadType;
}

export interface AuthMiddlewareConfig {
  authService: AuthService;
  requiredPlatform?: string;
  requiredRole?: 'USER' | 'ADMIN' | 'MODERATOR';
}

/**
 * Create authentication middleware for Express.js
 */
export function createAuthMiddleware(config: AuthMiddlewareConfig) {
  return (req: any, res: any, next: any) => {
    try {
      const token = config.authService.extractTokenFromHeader(req.headers.authorization);
      
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }

      const user = config.authService.verifyToken(token);
      
      // Check platform access
      if (config.requiredPlatform && !config.authService.hasAccess(user.platforms, config.requiredPlatform)) {
        return res.status(403).json({ error: 'Access denied to this platform' });
      }

      // Check role
      if (config.requiredRole) {
        const roleHierarchy = { USER: 0, MODERATOR: 1, ADMIN: 2 };
        const userLevel = roleHierarchy[user.role];
        const requiredLevel = roleHierarchy[config.requiredRole];
        
        if (userLevel < requiredLevel) {
          return res.status(403).json({ error: 'Insufficient permissions' });
        }
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

/**
 * Platform constants
 */
export const PLATFORMS = {
  ENTERPRISES: 'enterprises',
  CARE: 'care',
  MART: 'mart',
  LEARN: 'learn',
  STUDIOS: 'studios',
} as const;

export type Platform = typeof PLATFORMS[keyof typeof PLATFORMS];

/**
 * Helper functions for user roles
 */
export const UserRoles = {
  isAdmin: (role: string) => role === 'ADMIN',
  isModerator: (role: string) => role === 'MODERATOR' || role === 'ADMIN',
  isUser: (role: string) => ['USER', 'MODERATOR', 'ADMIN'].includes(role),
} as const;

/**
 * Default configuration
 */
export const DEFAULT_AUTH_CONFIG: AuthConfig = {
  jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  jwtExpiresIn: '24h',
  bcryptRounds: 12,
};
