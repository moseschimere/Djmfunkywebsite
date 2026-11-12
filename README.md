# DJ Website Scaffold

## How to use this in Cursor

1. Unzip this into a new folder, open it in Cursor.
2. In your terminal:
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
   ```
   When prompted about existing files, keep them (don't overwrite `.cursorrules`, `app/`, etc — merge, don't replace).
3. Install extras as you need them per route:
   ```bash
   npm install stripe zod resend
   ```
4. Copy `.env.local.example` to `.env.local` and fill in real keys as you set up Stripe/Resend/Sanity.
5. Open `.cursorrules` — Cursor will read this automatically and use it as project context for every suggestion.
6. Follow the build order in `.cursorrules`: layout → presskit → radio → book → merch.
7. Deploy early to Vercel (`vercel` CLI or GitHub integration) so you're iterating on a live URL from day one.

## Folder structure
```
app/
  layout.tsx
  page.tsx              (home)
  presskit/page.tsx
  book/page.tsx
  radio/page.tsx
  merch/page.tsx
  api/
    booking/route.ts        (only if not using Calendly embed)
    merch/checkout/route.ts
    merch/webhook/route.ts
components/              (put Nav, Footer, shared UI here)
lib/                     (Stripe client, Sanity client, helpers)
```
