# Agency landing page (Next.js, EN + FR)

## Run
    npm install
    cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL to your real domain
    npm run dev                    # http://localhost:3000

## Edit
- Brand name, email, domain: lib/site.ts
- All text (English and French), prices, FAQ: lib/content.ts
- Styles: app/globals.css

## Build and deploy for free
    npm run build                  # creates the static site in /out

Cloudflare Pages: Workers & Pages > Create > Pages > Upload assets > upload the "out" folder.
Or connect a Git repo: build command `npm run build`, output directory `out`.

## SEO included
Separate /en/ and /fr/ pages, hreflang, canonical URLs, Open Graph tags, JSON-LD, sitemap.xml, robots.txt.
"/" redirects visitors to /fr/ or /en/ based on browser language.
