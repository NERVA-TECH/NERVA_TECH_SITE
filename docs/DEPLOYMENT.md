# Deployment and preview policy

The SPA uses Vite and a Vercel rewrite to index.html. Confirm the Vercel project connection and production branch in Vercel before enabling deployments. The CI workflow does **not** deploy. Existing GitHub/Vercel automatic previews may occur if configured externally; verify project settings before pushing. Do not connect production credentials to pull_request workflows. Production deployment requires explicit owner authorization and manual approval.

## Quality gates

Run npm ci, npm run lint, npm run typecheck, npm test, npm run build. Validate form deliveries without submitting real customer information. Run browser accessibility, responsive, visual and console checks in an isolated preview. Ensure privacy copy receives legal review prior to publication.
