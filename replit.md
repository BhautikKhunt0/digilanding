# Nexus Digital - Digital Marketing Agency Website

## Overview

This is a modern, responsive digital marketing agency website built with React, Express, and PostgreSQL. The application features a professional landing page with contact form functionality and an admin interface for managing submissions. The site showcases a premium design system with smooth animations and modern UI components.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with React 18 and TypeScript
- **Build Tool**: Next.js built-in bundler with optimized builds
- **Routing**: Next.js App Router with file-based routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth page transitions and interactions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Next.js API Routes with TypeScript
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with structured error handling
- **Request Processing**: Next.js middleware for JSON parsing and logging
- **Development**: Hot reload with Next.js dev server

### Database Architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL
- **Type Safety**: Full TypeScript integration with inferred types

## Key Components

### UI Components
- **Design System**: Comprehensive component library using shadcn/ui
- **Color Scheme**: Custom brand colors (vibrant orange, accent teal, deep black)
- **Typography**: Montserrat and Inter font families
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Business Logic
- **Contact Form**: Multi-field form with validation and submission handling
- **Data Validation**: Zod schemas for both client and server-side validation
- **Error Handling**: Structured error responses with user-friendly messages
- **Success Feedback**: Toast notifications for user interactions

### Page Sections
- **Hero Section**: Full-screen landing with call-to-action
- **Services Section**: Asymmetric grid layout showcasing offerings
- **Portfolio Section**: Case study presentations with hover effects
- **Stats Section**: Animated counter displays
- **Contact Section**: Form submission with validation
- **Footer**: Company information and social links

## Data Flow

1. **User Interaction**: Forms are handled by React Hook Form with Zod validation
2. **Client Validation**: Real-time form validation before submission
3. **API Request**: TanStack Query manages API calls with error handling
4. **Server Processing**: Express routes validate and process requests
5. **Database Operations**: Drizzle ORM handles data persistence
6. **Response Handling**: Structured JSON responses with success/error states
7. **UI Updates**: Toast notifications and form state updates

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations
- **Replit**: Development and deployment platform

### UI & Animation Libraries
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation and gesture library
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **TypeScript**: Static type checking
- **Next.js**: Full-stack React framework
- **PostCSS**: CSS processing
- **Drizzle ORM**: Type-safe database operations

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Next.js dev server with fast refresh
- **Port Configuration**: Next.js on 3000, mapped to external port 80

### Production Build
- **Build Process**: Next.js build with optimized output
- **Output**: Static files in `.next/static/`, server bundle in `.next/`
- **Deployment**: Autoscale deployment target on Replit
- **Environment**: Production mode with optimized builds

### Database Management
- **Schema Evolution**: Drizzle migrations in `migrations/` directory
- **Connection**: Environment variable `DATABASE_URL` required
- **Development**: `npm run db:push` for schema synchronization

## Changelog

```
Changelog:
- June 18, 2025. Initial setup with Vite and Express
- June 18, 2025. Converted to Next.js 15 with App Router
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```