# Styling Haircutters · NYC

A clone of the Lovable site for **Styling Haircutters · NYC**, a Financial District barbershop.

Built with Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, matching the `haven` project's stack (framer-motion for animation, `next/font` for Fraunces + Inter).

## Design system
- **Fonts:** Fraunces (serif display) for headings, Inter for body
- **Palette:** near-black background, amber/gold accent, all defined as oklch CSS variables in `app/globals.css`

## Sections
Navbar · Hero (with rating card) · service marquee · Service Menu · Gallery · Reviews · Visit (info + map) · Footer

## Develop
```bash
npm install
npm run dev   # http://localhost:3000
```

Images are pulled from Unsplash (configured in `next.config.ts`).
