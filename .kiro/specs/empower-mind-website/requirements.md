# Empower Mind website requirements

Status: Foundation draft  
Source confidence: Mixed; organization summary is confirmed from the working brief, while programs, evidence, governance, and action pathways remain incomplete.

## 1. Core experience

### Requirement 1.1 — Immediate understanding

As a first-time visitor, I want to understand who Empower Mind serves, what it works on, and where it works without decoding institutional language.

Acceptance criteria:

- The opening experience identifies youth mental health, psychological well-being, social resilience, and the Malawi context.
- The hero does not rely on a generic slogan.
- The page moves quickly from the challenge to Empower Mind's response.
- The opening contains no unverified statistics.

### Requirement 1.2 — Human, non-template presentation

As any visitor, I want the site to feel credible, locally grounded, and carefully made.

Acceptance criteria:

- The site does not resemble a generic NGO, healthcare, SaaS, or AI-generated template.
- Real photography is used only after rights and consent are confirmed.
- Layouts vary according to content meaning.
- Korvexa's visual identity is not copied.

## 2. Audience needs

### Requirement 2.1 — Young people and communities

Visitors must be able to understand what support, programs, or resources are actually available.

Acceptance criteria:

- Service availability is not implied where it is not confirmed.
- “Get help” or crisis language is not published until routes are locally verified.
- Language is approachable and non-stigmatizing.
- Mobile and low-bandwidth use are prioritized.

### Requirement 2.2 — Partners, funders, researchers, and policymakers

Visitors must be able to assess Empower Mind's focus, methods, evidence, and organizational credibility.

Acceptance criteria:

- Programs, research, advocacy, and systems-strengthening work can be explored separately.
- Publications and evidence include dates and downloadable or linked sources when supplied.
- Partner/funder logos and claims appear only when verified.
- Governance, policies, and reporting information have a planned location.

### Requirement 2.3 — Participation

Visitors must understand available ways to collaborate or support the organization.

Acceptance criteria:

- Only confirmed pathways are published.
- Each action explains what happens next.
- Contact and form experiences include clear response expectations once approved.

## 3. Information architecture

The planned top-level structure is:

- Home
- About
- What We Do
- Programs
- Impact & Stories
- Research & Advocacy
- Resources
- Get Involved
- Contact

This is provisional. Consolidate or rename routes after the full content inventory.

## 4. Homepage narrative

The homepage should provisionally move through:

1. Grounded opening proposition
2. Context: why youth mental health and social resilience matter
3. Empower Mind's response model
4. Selected active programs
5. A real field story or “voice of change”
6. Evidence, learning, research, or advocacy
7. Ways to engage
8. Trust footer with organizational details

Do not implement sections 4–7 with fabricated content.

## 5. Content system

Acceptance criteria:

- Programs support status, dates, location, audience, summary, approach, partners, outcomes, media, and related resources.
- Stories support consent status and privacy-safe attribution.
- Publications support title, date, type, summary, file/link, authors, and topic.
- Resources support audience, format, language, topic, date reviewed, and safety note.
- Site-wide content can later migrate to a CMS without rewriting presentational components.

## 6. Accessibility and performance

Acceptance criteria:

- WCAG 2.2 AA target.
- Keyboard, focus, reduced motion, responsive type, and semantic structure are tested.
- Core Web Vitals targets in steering are treated as release criteria.
- The main content experience remains usable on a low-cost phone and slow connection.

## 7. Prohibited implementation behavior

- No invented copy disguised as fact.
- No AI people or fake documentary images.
- No unapproved donation flow.
- No generic crisis resource list.
- No carousel as a substitute for content hierarchy.
- No inaccessible scroll-driven storytelling.

## 8. Deployment

- The repository must build as a static Astro site into `dist`.
- It must deploy to the Cloudflare Pages project `empower-mind`.
- No Cloudflare Worker migration or server adapter may be introduced without explicit approval.
