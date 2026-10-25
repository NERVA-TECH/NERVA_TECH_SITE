# SEO, prerendering and commercial integration

This project remains React 18 + TypeScript + Vite + Tailwind, hosted as static files on Vercel. The build command runs Vite and then renders institutional routes to `dist/<route>/index.html` using ReactDOMServer and Vite's SSR module loader at **build time only**. The browser hydrates the markup. No server, paid SSR tier, database, or runtime API is added.

## Host configuration

Canonical host assumed: https://nervatechapp.com. **Confirm this is the primary public hostname** before production; redirect alternative domains in Vercel domain settings. Static nested index files must resolve directly. Vercel rewrites only legacy client-only pages, not all routes. Missing URLs use dist/404.html; verify HTTP 404 status on preview. The replaced /politica-de-privacidade permanently redirects to /privacidade.

## Previews and crawlers

VERCEL_ENV=preview makes prerendered pages include noindex,nofollow and writes disallow-all robots.txt. Set this environment variable during Vercel preview builds (Vercel normally injects it). Recommend Vercel preview protection and verifying X-Robots-Tag / page source. Canonical URLs always point to production. Do not submit preview sitemaps.

## Metadata and Google services

Each institutional page generates title, description, canonical, Open Graph, Twitter and schema (Organization, WebSite, BreadcrumbList; Service when relevant). Articles intentionally exclude publish date and author because they are not confirmed. Validate business details and editorial facts before production. Search Console: verify domain ownership using DNS or supplied token, upload /sitemap.xml, inspect sample pages. Analytics: **not installed** until consent experience and real GA4 Measurement ID are approved. Suggested events (without PII): whatsapp_click {channel:1|2}, linkedin_click, commercial_cta_click {location}, contact_submit_success, service_navigation {service}. Consent default denied; no tracking before opt in where required. Do not include message, names, emails or phone numbers in analytics.

## Contacts

Formspree form ID xaewejjd preserved. Confirm production account access, anti-spam quotas, privacy policy, delivery and notification recipients. Never send fictional submissions in production. WhatsApp numbers are non-preferred alternatives. LinkedIn /in/nervatech is based on the user-supplied canonical-looking URL; manually confirm redirect/profile ownership before launch.

## Testing

Run npm ci, npm run lint, npm run typecheck, npm run build, npm test. Inspect the actual response body with `curl -L -i https://preview-domain/path`, test /nonexistent for status 404, test direct deep URLs, redirect status 308/301, mobile and desktop navigation, screenshot comparisons and Formspree integration with a controlled test message once authorized.

## Editorial / legal blockers

Eight articles are drafts without claimed dates or bylines; editorial authorization required before launch. The privacy notice is preliminary and requires legal review.
