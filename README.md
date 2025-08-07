# YANA Enterprises - Digital Ecosystem

A comprehensive multi-platform digital ecosystem inspired by companies like Envato, providing healthcare, e-commerce, education, and creative services all under one unified brand.

## 🌟 Platforms

### 🏢 YANA Enterprises (Port 3000)
**Main Landing Page & Company Hub**
- Central navigation to all platforms
- Company information and services overview
- Contact and support center

### 🏥 YANACare (Port 3001)
**Hospital Management System**
- Patient management
- Appointment scheduling
- Medical records system
- Healthcare provider tools

### 🛒 YANA Mart (Port 3002)
**E-commerce Marketplace**
- Product catalog and shopping
- Seller marketplace
- Payment processing
- Order management

### 📚 YANA Learn (Port 3003)
**E-learning Platform (Your Academic Network Assistant)**
- Online courses and tutorials
- Interactive learning modules
- Progress tracking
- Certification system

### 🎨 YANA Studios (Port 3004)
**Creative Services Platform**
- Digital asset marketplace
- Design templates and resources
- Creative services booking
- Portfolio showcase

### 🔧 API Gateway (Port 8000)
**Backend Services**
- Unified authentication
- Service routing
- Data management
- Microservices coordination

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express and TypeScript
- **Architecture**: Microservices with Turborepo monorepo
- **UI Library**: Shared React components
- **Database**: PostgreSQL with Prisma ORM (planned)
- **Caching**: Redis (planned)
- **Package Manager**: npm with workspaces

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start all platforms in development**
   ```bash
   npm run dev
   ```

4. **Access the platforms**
   - YANA Enterprises: http://localhost:3000
   - YANACare: http://localhost:3001
   - YANA Mart: http://localhost:3002
   - YANA Learn: http://localhost:3003
   - YANA Studios: http://localhost:3004
   - API Gateway: http://localhost:8000

### Individual Platform Development

Run specific platforms:
```bash
# Start only the main enterprises site
turbo run dev --filter=yana-enterprises

# Start only YANACare
turbo run dev --filter=yana-care

# Start only the API
turbo run dev --filter=api
```

## 📁 Project Structure

```
yana/
├── apps/
│   ├── yana-enterprises/    # Main landing page (Port 3000)
│   ├── yana-care/          # Hospital management (Port 3001)
│   ├── yana-mart/          # E-commerce (Port 3002)
│   ├── yana-learn/         # E-learning (Port 3003)
│   ├── yana-studios/       # Creative services (Port 3004)
│   └── api/                # Backend API gateway (Port 8000)
├── packages/
│   ├── ui/                 # Shared React components
│   ├── typescript-config/  # Shared TypeScript configuration
│   └── eslint-config/      # Shared ESLint configuration
├── .github/
│   └── copilot-instructions.md
├── package.json
├── turbo.json
└── README.md
```
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
