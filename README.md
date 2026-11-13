# S.S. Services — Appliance Repair & Installation Portfolio Website

Official web application for **S.S. Services** (Lead Specialist: **Silu Panda**), Berhampur's trusted doorstep repair and installation service for Air Conditioners, Refrigerators, Washing Machines, and Smart LED/LCD TVs.

## Key Features

- **Centralized Configuration (`src/data/siteConfig.ts`)**: Single source of truth for business contact details (`9040423413`, `silupanda16@gmail.com`), official brand logo (`/images/ssservicelogo.webp`), UPI payment details (`9040423413@ybl`, `/images/qrcode.webp`), services, brands, trust pillars, testimonials, and AEO FAQs.
- **High-Performance WebP Asset Pipeline**: All hero, logo, workplace gallery, visiting card, and UPI QR code assets are optimized in `.webp` format with lazy loading and async decoding for near-instant page loads.
- **On-Site Work & Workshop Gallery (`src/components/WorkplaceGallery.tsx`)**: Filterable portfolio of real repair work across Berhampur (`All Photos`, `AC Service`, `Fridge & Cooling`, `Washing Machine`, `Workshop & Diagnostics`), including refrigerator condenser replacement & gas-filling work near Indian Overseas Bank and AC servicing in the Railway Control Room.
- **Official UPI QR Code & Payment Verification (`src/components/TrustSection.tsx` & `src/components/ContactSection.tsx`)**: Interactive UPI QR scan modal (`/images/qrcode.webp`), 1-click Copy UPI ID (`9040423413@ybl`), and WhatsApp receipt sharing.
- **Bright & Dark Industrial Theme (`src/context/ThemeContext.tsx`)**: Defaults to a high-trust Bright theme with seamless Dark mode switching and zero flash of unstyled content (FOUC).
- **SEO, GEO & AEO Ready (`index.html`)**: Configured with LocalBusiness / ApplianceRepairService JSON-LD schema, Berhampur geo-meta tags (`760004`), and custom circular favicons.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Image Optimization**: Sharp (WebP compression & alpha masking)
- **CI/CD & Hosting**: GitHub Actions (`.github/workflows/ci.yml`) + Vercel (`vercel.json`)

## Development & Build Commands

```bash
# Start local development server
npm run dev

# Run TypeScript type checking
npm run type-check

# Build production bundle
npm run build
```

---
Designed and developed by **[GaneshSahu](https://gamified-portfolio-one.vercel.app/)**.
