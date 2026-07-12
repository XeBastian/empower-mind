# Empower Mind website tasks

Codex must update checkboxes as work is completed. Do not skip dependencies.

## Wave 0 — Repository and truth audit

- [x] 0.1 Inspect the existing repository, scripts, framework, routes, styles, and assets.
- [x] 0.2 Compare the repository to `tech.md`; document any stack deviation before changing it.
- [ ] 0.3 Convert all supplied organization information into structured content with confidence status.
- [x] 0.4 Update `project-content/content-gaps.md`; do not invent missing answers.
- [x] 0.5 Produce a short audit report with risks and implementation sequence.

## Wave 1 — Architecture

- [ ] 1.1 Verify the Astro application shell, route map, page metadata strategy, and custom 404 route.
- [ ] 1.2 Refine the existing semantic Astro layout primitives and skip-link behavior.
- [ ] 1.3 Create content schemas/types for programs, stories, publications, resources, and organization details.
- [ ] 1.4 Create a content validation approach that prevents missing or provisional facts from silently shipping.
- [ ] 1.5 Add baseline test, lint, typecheck, and build scripts.

## Wave 2 — Design foundation

- [x] 2.1 Create semantic design tokens for color, type, spacing, grid, radius, shadow, and motion.
- [x] 2.2 Implement reset, global typography, container, and responsive utilities.
- [ ] 2.3 Build accessible button, link, figure, status label, disclosure, and form-field primitives.
- [x] 2.4 Build header, mobile navigation, footer, and route focus management.
- [ ] 2.5 Verify 320px, keyboard, reduced-motion, and no-horizontal-overflow behavior.

## Wave 3 — First vertical slice

- [x] 3.1 Build a typographic homepage opening that works without photography.
- [x] 3.2 Build the context and response-model sections using only confirmed brief content.
- [ ] 3.3 Add structured placeholders for programs, stories, evidence, and engagement that cannot accidentally appear as real production claims.
- [x] 3.4 Implement responsive behavior and subtle progressive reveals.
- [ ] 3.5 Add automated tests for navigation and critical homepage semantics.
- [ ] 3.6 Run the full quality gate and document failures.

## Wave 4 — Content-led pages

Only start after relevant content is supplied.

- [x] 4.1 About
- [ ] 4.2 What We Do / response model
- [x] 4.3 Programs index; programme-detail routes remain pending fuller programme data
- [ ] 4.4 Impact & Stories
- [ ] 4.5 Research & Advocacy
- [ ] 4.6 Resources
- [ ] 4.7 Get Involved
- [x] 4.8 Contact

## Wave 5 — Production readiness

- [ ] 5.1 Replace all temporary assets with approved assets and complete the asset register.
- [ ] 5.2 Complete privacy, safeguarding, terms, governance, and organizational-detail review.
- [ ] 5.3 Verify all forms and action pathways end to end.
- [ ] 5.4 Complete accessibility audit and fix critical/serious issues.
- [ ] 5.5 Complete performance audit on representative mobile conditions.
- [ ] 5.6 Validate metadata, sitemap, robots, redirects, social previews, and analytics consent.
- [ ] 5.7 Run typecheck, lint, unit tests, end-to-end tests, and production build.
- [ ] 5.8 Complete final content approval and remove all non-production placeholders.

## Installer baseline already supplied

The installer creates the Astro repository, baseline routes, tokens, Cloudflare Pages scripts, root `AGENTS.md`, Kiro steering, Codex skill, and initial tests. Audit this baseline before replacing it.
