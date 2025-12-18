# WizardOf.ai Landing Page

A modern, professional landing page for WizardOf.ai built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This is a fully responsive, production-ready landing page featuring:

- Modern gradient design with purple/pink color scheme
- Smooth animations and transitions
- Mobile-first responsive design
- SEO-friendly structure
- TypeScript for type safety
- Optimized performance

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack (Next.js default)

## Project Structure

```
wizardof-ai-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main landing page
├── public/                   # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## Features Implemented

### 1. Hero Section
- Large, eye-catching headline with gradient text
- Clear value proposition
- Dual CTA buttons (primary and secondary)
- Trust indicators (no credit card, free trial)

### 2. Features Section (4 Features)
- **Lightning Fast**: Optimized AI infrastructure
- **Enterprise Security**: SOC 2, GDPR, HIPAA compliance
- **Smart Automation**: Intelligent workflow learning
- **Customizable Magic**: Flexible API and no-code builder

### 3. How It Works Section
- 3-step process with numbered badges
- Clear, concise explanations
- Visual hierarchy with gradient elements

### 4. Pricing Section
- 3 pricing tiers: Starter ($29), Pro ($99), Enterprise (Custom)
- Feature comparison with checkmarks
- "Most Popular" badge on Pro tier
- Hover effects and transitions

### 5. Final CTA Section
- Strong call-to-action
- Social proof mention
- Large conversion button

### 6. Footer
- 4-column layout (Brand, Product, Company, Legal)
- Social media links (Twitter, GitHub, LinkedIn)
- Copyright and legal links
- Responsive grid layout

## Design Features

### Visual Design
- **Color Scheme**: Purple-to-pink gradients on dark slate background
- **Typography**: Modern sans-serif with clear hierarchy
- **Spacing**: Generous whitespace for readability
- **Icons**: Heroicons SVG icons throughout

### Animations & Interactions
- Hover effects on all interactive elements
- Scale transforms on cards
- Gradient shadows on buttons
- Smooth color transitions
- Border glow effects

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid layouts adapt from 1 to 3 columns
- Navigation hides on mobile (ready for hamburger menu)
- Touch-friendly button sizes

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd /root/github-repos/wizardof-ai-landing
```

2. Install dependencies (already installed):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-update as you edit files.

### Build

Create a production build:
```bash
npm run build
```

### Start Production Server

After building, start the production server:
```bash
npm start
```

## Customization Guide

### Changing Colors

Edit the gradient colors in `app/page.tsx`:
- Primary gradient: `from-purple-500 to-pink-600`
- Background: `from-slate-900 via-purple-900 to-slate-900`

### Updating Content

All content is in `app/page.tsx`. Key sections:
- Hero headline: Line 37-41
- Features: Line 84-140 (4 feature cards)
- How It Works: Line 155-191 (3 steps)
- Pricing: Line 206-337 (3 tiers)

### Adding Animations

The project uses Tailwind's built-in transitions. Add custom animations in `globals.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Performance Optimization

- Static generation (SSG) for instant page loads
- Optimized SVG icons (inline for better performance)
- Lazy loading ready (can be added for images)
- Minimal JavaScript bundle
- CSS purging via Tailwind

## SEO Considerations

To improve SEO, consider adding:
1. Meta tags in `app/layout.tsx`
2. Open Graph tags for social sharing
3. JSON-LD structured data
4. Sitemap generation
5. robots.txt

Example meta tags to add:
```tsx
export const metadata = {
  title: 'WizardOf.ai - AI Automation Platform',
  description: 'Transform your workflow with intelligent AI automation...',
  openGraph: {
    title: 'WizardOf.ai',
    description: '...',
    images: ['/og-image.png'],
  },
}
```

## Next Steps

### Recommended Enhancements

1. **Mobile Navigation**: Add hamburger menu for mobile devices
2. **Animations**: Add scroll-triggered animations (Framer Motion)
3. **Forms**: Implement email capture with validation
4. **Analytics**: Add Google Analytics or Plausible
5. **CMS Integration**: Connect to Sanity or Contentful
6. **A/B Testing**: Implement variant testing
7. **Image Assets**: Add product screenshots and demo videos
8. **Blog Section**: Add content marketing pages
9. **Customer Logos**: Add social proof with client logos
10. **Live Chat**: Integrate support chat widget

### Deployment Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Upload .next folder to Netlify
```

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your projects.

## Deployment

This project is configured for automatic deployment to Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for full details.

**Live URL**: https://wizardof-ai-landing.vercel.app

**Quick Deploy**:
- Push to GitHub `main` branch → Automatic deployment
- Or run: `vercel deploy --prod`

For quick reference, see [QUICK_START_DEPLOY.md](./QUICK_START_DEPLOY.md)

## Contact

For questions or support, visit [WizardOf.ai](https://wizardof.ai)

---

Built with Next.js by Tyler-TypeScript
Deployed with Vercel by Petra-DevOps
