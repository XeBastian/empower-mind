---
inclusion: always
---

# Accessibility and performance

## Accessibility baseline

Target WCAG 2.2 AA.

Required:

- Semantic landmarks and heading order.
- Keyboard-operable navigation, menus, dialogs, forms, and media.
- Visible focus states.
- Sufficient text and non-text contrast.
- Form labels, instructions, errors, and success states.
- Useful alt text; empty alt for decorative images.
- Captions or transcripts for meaningful audio/video.
- No meaning conveyed by color alone.
- Touch targets sized and spaced for mobile.
- No autoplaying audio.
- Reduced-motion support.
- Skip link and sensible focus management after route changes.

## Performance targets

On representative mobile conditions, aim for:

- LCP at or below 2.5 seconds.
- INP at or below 200 milliseconds.
- CLS at or below 0.1.
- Minimal JavaScript for content pages.
- Responsive images with explicit dimensions.
- Lazy-load below-the-fold media.
- No hero video by default.
- Font loading that avoids invisible text and layout shift.

Performance is part of dignity: the site must work for visitors with limited data, slower devices, and unstable connectivity.
