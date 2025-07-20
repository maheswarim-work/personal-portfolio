# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 13.5, TypeScript, and Tailwind CSS. The project uses the new App Router architecture and is configured for static export deployment to Azure Static Web Apps.

## Key Architecture

- **Framework**: Next.js 13.5 with App Router (`/app` directory)
- **UI Components**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Output**: Static export (`output: 'export'` in next.config.js)
- **Deployment**: Azure Static Web Apps with GitHub Actions

## Development Commands

```bash
# Development server
npm run dev

# Production build (generates static export in /out directory)
npm run build

# Start production server (for testing built app locally)
npm run start

# Lint the codebase
npm run lint
```

## Component Structure

- **UI Components**: Located in `/components/ui/` - these are Shadcn/ui components
- **Path Aliases**: Configured via `components.json`:
  - `@/components` → `/components`
  - `@/lib/utils` → `/lib/utils`
  - `@/components/ui` → `/components/ui`
  - `@/lib` → `/lib`
  - `@/hooks` → `/hooks`

## Styling System

- Uses CSS variables defined in `app/globals.css` for theming
- Tailwind config extends with custom color tokens and animations
- Responsive design with mobile-first approach
- All components use Tailwind classes, not CSS modules

## Build Configuration

- **Static Export**: The site builds to static files in `/out` directory
- **Image Optimization**: Disabled (`unoptimized: true`) for static export compatibility
- **ESLint**: Ignored during builds to prevent deployment failures
- **Azure Config**: Uses `staticwebapp.config.json` for routing (SPA fallback to index.html)

## Deployment

The project is configured for Azure Static Web Apps deployment:
- Automatic builds trigger on pushes to main branch
- Build artifacts are in `/out` directory after `npm run build`
- Uses Node.js 18 runtime as specified in `staticwebapp.config.json`
- Setup script available at `scripts/setup-azure.sh`

## Code Style (from Cursor rules)

- **Formatting**: Prettier with single quotes, 100 character line width, 2 spaces
- **Import Style**: Non-relative imports preferred, organize imports enabled
- **TypeScript**: Strict type checking with inlay hints enabled
- **File Associations**: Standard React/TypeScript file extensions

## Testing

No testing framework is currently configured. If adding tests, follow the project's existing patterns and add test commands to package.json.