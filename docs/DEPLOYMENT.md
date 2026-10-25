# Deployment and preview policy

The SPA uses Vite and a Vercel rewrite to index.html. Confirm the Vercel project connection and production branch in Vercel before enabling deployments. The CI workflow does **not** deploy. Existing GitHub/Vercel automatic previews may occur if configured externally; verify project settings before pushing. Do not connect production credentials to pull_request workflows. Production deployment requires explicit owner authorization and manual approval.

## Quality gates

Run npm ci, npm run lint, npm run typecheck, npm test, npm run build. Validate form deliveries without submitting real customer information. Run browser accessibility, responsive, visual and console checks in an isolated preview. Ensure privacy copy receives legal review prior to publication.

## Static release procedure

Vite builds a static client bundle, then scripts/prerender.mjs builds HTML by route. Preview deployments should be isolated from production with VERCEL_ENV=preview, noindex and disallow robots. Verify direct /privacidade, article routes, redirects and an unknown URL (actual HTTP 404) on the Vercel preview. Quality gates: npm ci, lint, typecheck, npm run build, npm test, browser screenshots. The CI does not publish production by itself; however GitHub-connected Vercel may produce automatic branch previews.

Release blockers: owner approval for merge/deploy; canonical domain and company/legal/privacy facts; account-specific Formspree data practices; accessibility and visual audit of internal pages; true HTTP status checks; Google integration credentials if analytics is desired. Optional improvements: Lighthouse performance budgets and automated axe checks.
