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

## Domain

Live at [minnehaha-inc.com](https://minnehaha-inc.com) (hosted on Vercel, DNS on Cloudflare).

Redirects for `/testimonials` → `/#testimonials` and other legacy paths are configured in `next.config.ts`.

## SEO Checklist

### Already in the codebase

- Canonical URLs pointing to `https://minnehaha-inc.com`
- `robots.txt` and `sitemap.xml`
- Open Graph + Twitter card metadata
- JSON-LD: `LocalBusiness`, `WebSite`, `FAQPage`, and service catalog
- Web app manifest
- Local keywords in metadata

### Set up in Vercel (environment variables)

1. **Google Search Console** — verify ownership via HTML tag, then add the content value as `GOOGLE_SITE_VERIFICATION`
2. **Bing Webmaster Tools** — optional; add `BING_SITE_VERIFICATION`

### Set up manually (high impact)

1. **Google Search Console** — add property `https://minnehaha-inc.com`, submit `https://minnehaha-inc.com/sitemap.xml`, request indexing for the homepage
2. **Google Business Profile** — claim/create listing for MBM with address, phone, hours, website, and photos
3. **Bing Webmaster Tools** — add site and submit sitemap
4. **Vercel domains** — redirect `www.minnehaha-inc.com` → `minnehaha-inc.com` (apex is primary)
5. **Google Maps** — ensure business listing links to the new website

### Optional improvements

- Replace `og-image.svg` with a PNG/JPG (some social platforms handle SVG poorly)
- Add social profile URLs to `sameAs` in `lib/schema.ts` when available
- Collect real client testimonials and photos for richer search snippets
