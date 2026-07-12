---
name: ngo-website-craft
description: Design, build, audit, or improve a premium NGO, nonprofit, youth, community, public-health, or impact website. Use for information architecture, page composition, content modeling, accessibility, evidence, safeguarding, responsive behavior, and anti-template design. Do not use to invent organization facts or clinical advice.
---

# NGO website craft workflow

## Inputs

Read:

1. Repository `AGENTS.md`
2. Relevant `.kiro/steering/` files
3. Active spec
4. Confirmed brief and content-gap register
5. Existing code and assets

## Workflow

### 1. Establish truth

Separate confirmed, provisional, missing, and retired information. Stop invented content from entering UI code.

### 2. Identify visitor jobs

Describe the main visitor intentions and the shortest trustworthy path for each. Do not assume every NGO needs donation, volunteering, or emergency-support pathways.

### 3. Shape the narrative

For each page, define:

- The question the visitor arrives with.
- The strongest factual answer.
- The emotional tone.
- The next useful action.
- The evidence or proof required.
- The content that must not be oversimplified.

### 4. Compose, do not template

Create a section rhythm based on meaning. Avoid repeating one card grid. Select a unique dominant idea for each page while keeping shared tokens, navigation, typography, and interaction rules.

### 5. Build responsibly

Use semantic HTML, content models, responsive media, keyboard behavior, reduced motion, and low-bandwidth defaults.

### 6. Test the real experience

Review:

- 320px mobile
- Keyboard-only use
- Reduced motion
- Slow network
- Missing image
- Long title
- Empty dataset
- Form error
- No-JavaScript content availability where practical

### 7. Audit before completion

Run the repository checks and review every item in `.kiro/steering/quality-gates.md`.

## Output contract

Report:

- Decisions made and why
- Confirmed versus provisional content used
- Requirements satisfied
- Files changed
- Tests run
- Risks and unresolved content gaps
