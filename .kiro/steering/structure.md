---
inclusion: always
---

# Astro project structure

```text
src/
  components/
    editorial/
    layout/
    primitives/
  data/
  layouts/
  pages/
  styles/
  utils/
public/
project-content/
.kiro/
.agents/
```

## Boundaries

- `src/pages/` owns routes and composes page sections.
- `src/layouts/` owns document structure, metadata, site chrome, and shared scripts.
- `src/components/` contains small semantic Astro components.
- `src/data/` contains typed organization and navigation data.
- `project-content/` remains the editorial source and content-gap register.
- Public copy must be traceable to confirmed or approved source material.
- Avoid one oversized component and avoid a generic catch-all card component.

## Naming

- Astro components: `PascalCase.astro`
- TypeScript modules: `camelCase.ts`
- Routes: lowercase and hyphenated
- CSS classes: readable, low-specificity, component-oriented names
