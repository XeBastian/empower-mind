# Empower Mind website design

Status: Foundational design direction; refine after full brief, logo, brand material, program inventory, and photography audit.

## 1. Design idea

**A field journal for collective well-being.**

The site should combine the warmth of community documentation with the clarity of a serious public-interest organization. It should feel alive because of real people, field evidence, and editorial rhythm—not decorative effects.

## 2. Experience arc

The visitor should feel:

1. **Seen** — the opening acknowledges real pressures without sensationalizing them.
2. **Oriented** — Empower Mind's role becomes concrete.
3. **Convinced** — programs, methods, stories, and evidence establish credibility.
4. **Invited** — the site offers a relevant next step.

## 3. Visual system

### Typography

Provisional pairing:

- `Source Sans 3`: body, navigation, UI, labels, data.
- `Source Serif 4`: selected headlines, quotations, editorial statements.

Use fluid type with controlled line length. Avoid oversized hero typography that pushes meaning below the fold on mobile.

### Color

Create semantic tokens rather than hardcoding values:

- `canvas`
- `surface`
- `ink`
- `muted-ink`
- `line`
- `living`
- `living-strong`
- `warmth`
- `focus`
- status colors

The initial palette should be warm-neutral, deep-ink, green-led, and sparing with secondary warmth. Confirm against logo and photography before finalizing.

### Grid

- A flexible 12-column desktop grid.
- Strong inner content measures.
- Mobile stacking designed independently rather than mechanically collapsing desktop.
- Occasional offset text/image relationships.
- Full-width sections only when they provide narrative emphasis.

## 4. Component families

### Primitives

- Container
- Stack
- Cluster
- Grid
- Rule
- Eyebrow
- Button / text link
- Figure / caption
- Accessible disclosure
- Form field
- Status label

### Editorial

- Story lead
- Field note
- Quote with consent-safe attribution
- Program summary
- Evidence strip
- Publication item
- Resource item
- Timeline
- Approach step
- Image sequence
- Partner acknowledgment

A component family is not permission to place everything in cards.

## 5. Homepage composition

### Opening

Use a powerful real photograph or restrained image sequence only when approved assets exist. Until then, design a typographic opening that can stand on its own.

The opening should contain:

- A specific proposition.
- One primary route.
- One quiet secondary route.
- A small contextual label, not a decorative badge.

### Response model

Present community empowerment, youth engagement, advocacy, research, and systems strengthening as connected parts of one model. Avoid five identical icon cards. Consider a flowing editorial diagram or stepped narrative.

### Programs

Show a small, intentional selection. Program cards may vary by content and status. Do not imply a program is active without dates/status.

### Voice of change

Prioritize a specific, consented story with context over a rotating testimonial carousel.

### Evidence and learning

Use publication dates, concise findings, and links. Never create decorative impact numbers.

## 6. Interaction design

- Navigation is calm, fast, and keyboard-safe.
- Section reveals are subtle and non-blocking.
- Image transitions are editorial, not cinematic.
- Page transitions should not slow navigation.
- Every interaction works without hover.
- Reduced-motion mode removes reveal dependence.

## 7. Data model sketch

```ts
type ContentStatus = 'confirmed' | 'provisional' | 'missing' | 'retired';

interface Program {
  slug: string;
  title: string;
  status: ContentStatus;
  lifecycle?: 'planned' | 'active' | 'completed';
  startDate?: string;
  endDate?: string;
  locations: string[];
  audiences: string[];
  summary: string;
  approach: string[];
  outcomes?: Outcome[];
  partners?: OrganizationRef[];
  media?: MediaAsset[];
}

interface Story {
  slug: string;
  title: string;
  status: ContentStatus;
  consentStatus: 'verified' | 'restricted' | 'unknown';
  attributionMode: 'named' | 'first-name' | 'anonymous' | 'composite';
  summary: string;
  body: unknown;
  relatedPrograms: string[];
}

interface Resource {
  slug: string;
  title: string;
  status: ContentStatus;
  audience: string[];
  topic: string[];
  format: string;
  language: string[];
  reviewedAt?: string;
  safetyNote?: string;
}
```

## 8. SEO and sharing

- Unique titles and descriptions.
- Organization schema only with verified details.
- Article or report metadata where appropriate.
- Meaningful Open Graph images.
- Sitemap and canonical URLs.
- No keyword-stuffed mental-health copy.

## 9. Content and design dependencies

Do not finalize the homepage until these arrive:

- Approved organization description.
- Logo and current brand files.
- Program inventory with status and dates.
- Confirmed locations.
- Contact details and action pathways.
- Approved photography and consent status.
- Governance/policy information.
- Publications and evidence.
- Partner/funder list.
