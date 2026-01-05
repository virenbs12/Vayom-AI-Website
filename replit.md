# Vayom AI - Revenue Intelligence Platform

## Overview

Vayom AI is an enterprise B2B/B2C revenue intelligence platform built on RIAA (Revenue Intelligence Agentic Atlas). The platform helps businesses identify cash leakage across contracts, pricing, billing, and transactions by connecting disparate data sources (ERP, CRM, documents, feeds) and providing evidence-linked answers for finance, RevOps, and operations teams.

The application is a full-stack TypeScript project with a React frontend and Express backend, designed for both SaaS and VPC deployment models.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom Venus/Taurus color palette, shadcn/ui components (New York style)
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for page transitions
- **Build Tool**: Vite with custom plugins for meta images and Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints under `/api` prefix
- **File Uploads**: Multer for resume/document handling (PDF, DOC, DOCX up to 10MB)
- **Validation**: Zod schemas for request validation
- **Email Validation**: Blocks public email providers (Gmail, Yahoo, etc.) for business forms

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Schema**: Users table with UUID primary keys
- **Migrations**: Drizzle Kit for schema migrations (`npm run db:push`)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components organized by feature
│   │   ├── pages/        # Route pages (Home, Markets, Pricing, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── data/         # Static data (blogs, events, demos)
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── static.ts     # Static file serving for production
│   └── storage.ts    # Data storage abstraction
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Design specs and brand guidelines
```

### Key Design Decisions

**Monorepo Structure**: Frontend and backend share types through the `shared/` directory, ensuring type safety across the stack.

**Path Aliases**: TypeScript configured with `@/` for client source, `@shared/` for shared modules, and `@assets/` for attached assets.

**Development vs Production**: Vite middleware serves the frontend in development; static files are served from `dist/public` in production.

**Form Handling**: React Hook Form with Zod validation for all user-facing forms (contact, partner applications, pricing onboarding).

## External Dependencies

### Core Services
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Azure Communication Services**: Email delivery for form submissions (sales notifications and user confirmations)

### Third-Party Integrations
- **Embla Carousel**: Hero section carousel functionality
- **Date-fns**: Date formatting and manipulation
- **Multer**: Multipart form data handling for file uploads

### UI/Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives (dialogs, dropdowns, tabs, etc.)
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component patterns using Radix + Tailwind

### Development Tools
- **Drizzle Kit**: Database migration tooling
- **ESBuild**: Production server bundling
- **TSX**: TypeScript execution for development