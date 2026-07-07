# Minnehaha Building Maintenance Inc.

Modern marketing website for Minnehaha Building Maintenance Inc. — professional window cleaning and building maintenance serving the Twin Cities since 1978.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Pages and routes (SSG)
- `components/` — Reusable UI, layout, sections, and cards
- `content/` — Typed content data (services, industries, FAQs, etc.)
- `lib/` — Constants, metadata helpers, utilities
- `public/` — Static assets

## Pre-Launch Checklist

Before going live, collect from the client:

1. **Real testimonials** — replace placeholder content in `content/testimonials.ts`
2. **High-resolution logo** (SVG preferred) — replace Wix CDN URL in `lib/constants.ts`
3. **Business hours** — confirm in `lib/constants.ts`
4. **Social media URLs** — add to `components/json-ld.tsx` `sameAs` array
5. **Google Maps embed URL** — update `MAP_EMBED_URL` in `lib/constants.ts`
6. **Professional photography** — replace Unsplash/Wix placeholder images
7. **Google Search Console** — add verification meta tag to `app/layout.tsx`
8. **Contact form** — wire up Web3Forms, Formspree, or Resend in `components/contact-form.tsx`

## Contact Form

The contact form UI is complete with validation and success states. Submission is currently mocked — see the comment in `components/contact-form.tsx` to integrate your preferred provider.

## Domain Cutover

When replacing the Wix site:

1. Deploy to Vercel or your hosting provider
2. Update DNS for `mbminc-services.com`
3. Redirects for `/testimonials` → `/#testimonials` are configured in `next.config.ts`
