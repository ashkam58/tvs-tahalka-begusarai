# Tahalka TVS — Begusarai (Next.js)

A clean, fast, **WhatsApp-first** website for a TVS dealer in Begusarai with a simple Bihar touch. Manually update bikes, offers, and services via JSON.

**Address:** NH-28, Teghra Chowk, Begusarai, Bihar-851133  
**Sales:** +91 73197 62328 (WhatsApp)  
**Service:** +91 74800 12328 (WhatsApp)

## Features
- App Router (Next.js 14), TypeScript
- Tailwind CSS (simple, bright theme with TVS-like colors)
- JSON-driven content: `/data/bikes.json`, `/data/offers.json`, `/data/services.json`, `/data/faqs.json`
- SEO ready: metadata, Open Graph, robots.txt, sitemap.xml, JSON-LD (LocalBusiness)
- 4-page navigation: Home, Bikes, Services, Contact
- Floating WhatsApp buttons for **Sales** and **Service**
- Bikes list + individual bike pages
- Offers marquee (flashy but readable)
- Free first service info
- Pipes callout section (since showroom also sells pipes)

## Quick Start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy
- Easiest: Import this repo to **Vercel** and deploy.  
- Or build locally:
```bash
npm run build
npm start
```

## Editing Content (No API needed)
- **Bikes:** edit `data/bikes.json`. Add images to `public/bikes` and reference them by `/bikes/your-file.jpg`.
- **Offers:** edit `data/offers.json` (shows on the homepage marquee).
- **Services:** edit `data/services.json`.
- **FAQ:** edit `data/faqs.json`.

Each **bike** object looks like:
```json
{
  "name": "TVS Apache RTR 160 4V",
  "slug": "apache-rtr-1604v",
  "price_from_inr": 130000,
  "engine_cc": 159.7,
  "mileage_kmpl": 45,
  "highlights": ["Oil-cooled 4-valve engine", "LED headlamp", "SmartXonnect (optional)"],
  "image": "/bikes/apache-rtr-1604v.jpg"
}
```

## Notes
- This is an independent dealer website; TVS trademarks belong to their owners.
- Replace `https://www.example.com` in `app/layout.tsx`, `public/sitemap.xml`, and `public/robots.txt` with your real domain after deployment.
- To add **About** later, create `app/about/page.tsx` and link it from the Navbar.
- Keep copy crisp and bilingual where helpful (simple Hinglish works great locally).
