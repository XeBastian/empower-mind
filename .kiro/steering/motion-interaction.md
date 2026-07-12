---
inclusion: fileMatch
fileMatchPattern: ['**/*.tsx', '**/*.css', '**/*.ts']
---

# Motion and interaction

## Purpose

Motion should clarify sequence, hierarchy, state, or spatial relationship. It must never compensate for weak composition.

## Motion vocabulary

Use a small family of behaviors:

- Soft reveal: opacity plus 8–20px translation.
- Editorial mask reveal for selected headlines or imagery.
- Gentle image scale shift of no more than roughly 1.02–1.05.
- Stagger only when items form a meaningful sequence.
- Underline, rule, or label transitions for navigation and links.

## Timing

- Micro interaction: roughly 120–220ms.
- Component transition: roughly 220–420ms.
- Editorial reveal: roughly 450–700ms.
- Avoid long chains that delay reading.
- Use natural easing; avoid bouncy spring motion for serious content.

## Rules

- All content must remain available without JavaScript-triggered animation.
- Respect `prefers-reduced-motion`.
- Do not animate large quantities of text individually.
- Avoid scroll-jacking, pinned sections by default, cursor effects, and perpetual movement.
- Hover must never be the only way to discover content.
- Mobile motion should be lighter than desktop motion.
