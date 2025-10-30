# Next.js Portfolio - Setup Guide

## Project Structure

This is a Next.js 14+ application using the App Router architecture.

### Key Files

- `/app/layout.tsx` - Root layout with ThemeProvider and global styles
- `/app/page.tsx` - Main page component with GSAP scroll animations
- `/components/*` - React components (all marked with 'use client' where needed)
- `/styles/globals.css` - Tailwind v4 global styles

## Features

### 1. Dark Theme by Default
The portfolio defaults to dark mode. Users can switch between light, dark, and system themes via the theme toggle in the header.

### 2. Hero Section with Photo
The hero section includes:
- Professional headshot photo (circular with gradient border effects)
- Typewriter effect for name
- CTA buttons
- Social media links

### 3. GSAP Scroll Effects
Implemented scroll-triggered animations:
- **About Section**: Zoom-in effect on scroll
- **Partners Section**: Horizontal slide-in effect
- **Skills Section**: Zoom-out effect on scroll

### 4. Project Category Tabs
Projects section features capsule-style tabs for filtering:
- All Projects
- Websites
- Apps
- Systems Design
- UI/UX Designs

Each tab shows the count of projects in that category.

## Required Dependencies

\`\`\`json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next": "^14.0.0",
    "gsap": "^3.12.0",
    "motion": "latest",
    "lucide-react": "latest",
    "tailwindcss": "^4.0.0"
  }
}
\`\`\`

## GSAP Setup

GSAP is used for advanced scroll animations:
- Import and register ScrollTrigger plugin
- Add 'use client' to components using GSAP
- Clean up ScrollTrigger instances on unmount

## Component Guidelines

### Client Components
All components with interactivity require 'use client' directive:
- Components using hooks (useState, useEffect, etc.)
- Components with event handlers
- Components using GSAP or Motion animations
- All Aceternity UI components

### Image Handling
Use `ImageWithFallback` component from `/components/figma/ImageWithFallback.tsx` for all images.

## Styling

- Dark theme uses black/white/gray color palette
- Tailwind v4 with CSS variables
- Smooth transitions for theme changes
- Minimal hover effects for professional look

## Running the Project

This is a Next.js project. To run locally:
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`
