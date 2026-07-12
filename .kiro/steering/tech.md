---
inclusion: always
---

# Technology stack

## Approved baseline

- Astro, static output
- TypeScript strict mode
- pnpm
- Astro components and semantic HTML
- Plain CSS with semantic tokens and low-specificity architecture
- Vitest for content and utility tests
- Prettier with Astro support
- Wrangler for Cloudflare Pages Direct Upload

Do not add React, Vue, Svelte, Tailwind, a UI component library, or an animation framework by default. Use Astro islands only for interactions that genuinely require client JavaScript.

## Cloudflare Pages

- Project name: `empower-mind`
- Provisional URL: `https://empower-mind.pages.dev`
- Build command: `pnpm build`
- Output directory: `dist`
- Manual deployment: `pnpm deploy`

This repository intentionally targets Pages. Do not migrate to Workers without explicit user approval.

## Required commands

```bash
pnpm dev
pnpm check
pnpm lint
pnpm test
pnpm build
pnpm deploy
```

## Device baseline

Treat low-cost Android phones, slower connections, keyboard users, and reduced-motion users as first-class. Ship little or no client JavaScript for content-only sections.
