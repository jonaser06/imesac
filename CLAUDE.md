# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for IMESAC (Instalaciones Mecanicas Electricas Sur S.A.C), an electrical engineering company specializing in low and medium voltage systems. The application serves as a corporate website with services showcase, company information, and an e-commerce store.

## Development Commands

- `npm run dev --turbopack`: Start development server with Turbopack for faster builds
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check code quality and style

## Architecture & Key Technologies

### Frontend Stack
- **Next.js 15** with App Router architecture
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling with PostCSS
- **shadcn/ui** components configured with New York style variant
- **Lucide React** for icons
- **React Icons** for additional icon sets

### Component Architecture
The application follows a modular component structure:

- **Layout Components**: Header with dropdown navigation, Footer, WhatsApp float button
- **Section Components**: Slider (hero), Categories, BlogGrid, StoreSection, Companies
- **UI Components**: Using shadcn/ui pattern in `src/components/ui/`
- **Page Components**: Organized under app router structure with nested routes

### Styling Approach
- CSS Modules for component-specific styles (`.module.css` files)
- Tailwind CSS for utility classes and design system
- Custom utility function `cn()` in `src/lib/utils.ts` for conditional class merging
- CSS variables enabled for shadcn/ui theming

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── nosotros/          # About company pages (mision, vision)
│   ├── tienda/            # Store section with dynamic product routes
│   └── layout.tsx         # Root layout with Header, Footer, WhatsApp
├── components/            # Reusable components with CSS modules
│   ├── [ComponentName]/   # Each component in its own folder
│   │   ├── Component.tsx
│   │   ├── Component.module.css
│   │   └── index.ts
│   └── ui/               # shadcn/ui components
└── lib/
    └── utils.ts          # Utility functions including cn() for class merging
```

### Image Configuration
Next.js is configured to allow images from:
- `placehold.co` (placeholder service)
- `placehold.jp` (placeholder service)

### Navigation Structure
The site includes:
- **Nosotros** (About): Company info, mission, vision
- **Servicios** (Services): Various electrical services dropdown
- **Tienda** (Store): E-commerce section with dynamic product pages
- **Blog**: Content section
- **Contacto** (Contact): Contact information

## Development Notes

- Components use TypeScript with proper typing
- Each major component has its own folder with CSS modules
- The store section supports dynamic product routing via `[producto]` parameter
- WhatsApp integration for customer contact
- Responsive design considerations for mobile and desktop