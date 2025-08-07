<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# YANA Enterprises Project Instructions

## Project Overview
This is a comprehensive multi-platform ecosystem built with TypeScript, Next.js, and Node.js. The project follows a microservices architecture using Turborepo for monorepo management.

## Architecture
- **Monorepo**: Turborepo with npm workspaces
- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express and TypeScript
- **UI Library**: Shared React components across all platforms
- **Database**: PostgreSQL with Prisma ORM (to be implemented)
- **Caching**: Redis (to be implemented)

## Platform Structure
1. **YANA Enterprises** (Port 3000) - Main landing page and company hub
2. **YANACare** (Port 3001) - Hospital management system
3. **YANA Mart** (Port 3002) - E-commerce marketplace  
4. **YANA Learn** (Port 3003) - E-learning platform (Your Academic Network Assistant)
5. **YANA Studios** (Port 3004) - Creative services platform
6. **API Gateway** (Port 8000) - Backend services and authentication

## Development Guidelines
- Use TypeScript for all new code
- Follow the established component structure in `@yana/ui`
- Each platform should use the `YANALayout` component for consistent branding
- API routes should be organized by service in the API gateway
- Use Tailwind CSS for styling with the established color scheme:
  - Enterprises: Blue (bg-blue-600)
  - Care: Green (bg-green-600) 
  - Mart: Purple (bg-purple-600)
  - Learn: Orange (bg-orange-600)
  - Studios: Pink (bg-pink-600)

## Key Features to Implement
- Shared authentication system across all platforms
- User management and role-based access
- Payment processing for Mart and Studios
- Learning management system for YANA Learn
- Hospital management features for YANACare
- Creative asset marketplace for Studios

## File Structure
```
apps/
├── yana-enterprises/     # Main landing page
├── yana-care/           # Hospital management
├── yana-mart/           # E-commerce
├── yana-learn/          # E-learning
├── yana-studios/        # Creative services
└── api/                 # Backend API gateway

packages/
├── ui/                  # Shared React components
├── typescript-config/   # Shared TypeScript config
└── eslint-config/      # Shared ESLint config
```

## Development Commands
- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications
- `npm run lint` - Lint all code
- `turbo run dev --filter=yana-enterprises` - Run specific app

## Styling Guidelines
- Use the `YANALayout` component for consistent headers and footers
- Maintain responsive design principles
- Follow the established color scheme for each platform
- Use semantic HTML elements
- Ensure accessibility compliance
