import { PrismaClient, User, UserRole } from '@prisma/client';

// Extend the PrismaClient with custom methods
class ExtendedPrismaClient extends PrismaClient {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  /**
   * Initialize the database with default data
   */
  async seed() {
    console.log('🌱 Seeding database...');

    // Create default categories for YANA Mart
    await this.createMartCategories();
    
    // Create default categories for YANA Learn
    await this.createLearnCategories();
    
    console.log('✅ Database seeded successfully');
  }

  /**
   * Create default categories for YANA Mart
   */
  private async createMartCategories() {
    const categories = [
      { name: 'Electronics', description: 'Phones, computers, and gadgets', icon: '📱' },
      { name: 'Fashion', description: 'Clothing, shoes, and accessories', icon: '👔' },
      { name: 'Home & Garden', description: 'Furniture, decor, and garden supplies', icon: '🏠' },
      { name: 'Sports', description: 'Sporting goods and equipment', icon: '⚽' },
      { name: 'Books', description: 'Physical and digital books', icon: '📚' },
      { name: 'Health & Beauty', description: 'Cosmetics, supplements, and wellness', icon: '💄' },
    ];

    for (const category of categories) {
      await this.martCategory.upsert({
        where: { name: category.name },
        update: {},
        create: category,
      });
    }
  }

  /**
   * Create default categories for YANA Learn
   */
  private async createLearnCategories() {
    const categories = [
      { name: 'Programming', description: 'Software development and coding', icon: '💻', color: '#3B82F6' },
      { name: 'Business', description: 'Entrepreneurship and management', icon: '💼', color: '#10B981' },
      { name: 'Design', description: 'Graphic design and UI/UX', icon: '🎨', color: '#F59E0B' },
      { name: 'Marketing', description: 'Digital marketing and advertising', icon: '📈', color: '#EF4444' },
      { name: 'Health', description: 'Medical and health sciences', icon: '⚕️', color: '#8B5CF6' },
      { name: 'Language', description: 'Foreign languages and communication', icon: '🗣️', color: '#EC4899' },
    ];

    for (const category of categories) {
      await this.learnCategory.upsert({
        where: { name: category.name },
        update: {},
        create: category,
      });
    }
  }

  /**
   * Get user with all platform profiles
   */
  async getUserWithProfiles(userId: string) {
    return this.user.findUnique({
      where: { id: userId },
      include: {
        careProfile: true,
        martSeller: true,
        studiosProfile: true,
        sessions: {
          where: {
            expiresAt: {
              gt: new Date(),
            },
          },
        },
      },
    });
  }

  /**
   * Clean up expired sessions
   */
  async cleanupExpiredSessions() {
    const result = await this.session.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
    
    console.log(`🧹 Cleaned up ${result.count} expired sessions`);
    return result;
  }

  /**
   * Get platform statistics
   */
  async getPlatformStats() {
    const [
      totalUsers,
      totalCareProfiles,
      totalMartSellers,
      totalMartProducts,
      totalLearnCourses,
      totalStudiosProfiles,
    ] = await Promise.all([
      this.user.count(),
      this.careProfile.count(),
      this.martSeller.count(),
      this.martProduct.count(),
      this.learnCourse.count(),
      this.studiosProfile.count(),
    ]);

    return {
      totalUsers,
      platforms: {
        care: {
          profiles: totalCareProfiles,
        },
        mart: {
          sellers: totalMartSellers,
          products: totalMartProducts,
        },
        learn: {
          courses: totalLearnCourses,
        },
        studios: {
          profiles: totalStudiosProfiles,
        },
      },
    };
  }

  /**
   * Search across all platforms
   */
  async globalSearch(query: string, limit: number = 10) {
    const [users, martProducts, learnCourses, studiosAssets] = await Promise.all([
      this.user.findMany({
        where: {
          OR: [
            { firstName: { contains: query, mode: 'insensitive' } },
            { lastName: { contains: query, mode: 'insensitive' } },
            { username: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: limit,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          avatar: true,
        },
      }),
      this.martProduct.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
          isActive: true,
        },
        take: limit,
        include: {
          seller: { select: { storeName: true } },
          category: { select: { name: true } },
        },
      }),
      this.learnCourse.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
          isPublished: true,
        },
        take: limit,
        include: {
          instructor: { select: { firstName: true, lastName: true } },
          category: { select: { name: true } },
        },
      }),
      this.studiosAsset.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: limit,
        include: {
          creator: { select: { firstName: true, lastName: true } },
        },
      }),
    ]);

    return {
      users,
      products: martProducts,
      courses: learnCourses,
      assets: studiosAssets,
    };
  }
}

// Create a singleton instance
const db = new ExtendedPrismaClient();

// Graceful shutdown
process.on('beforeExit', async () => {
  await db.$disconnect();
});

export { db };
export * from '@prisma/client';

// Re-export commonly used types
export type {
  User,
  UserRole,
} from '@prisma/client';
