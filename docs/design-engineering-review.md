# Design-engineering review — Emil Kowalski skills

## Scope
Source-level review of the existing design system and global motion/accessibility rules, using `emil-design-eng`, `review-animations`, `animation-performance`, and `break-ui` principles.

## Findings
- The application already has a deliberately documented, token-driven visual system and custom motion rules.
- Existing reduced-motion handling is present for the inspected animated elements.
- The global focus-outline reset is explicitly documented as an owner-directed design decision, with custom focus affordances elsewhere. It was not overridden.
- This repository's `AGENTS.md` makes design decisions human-authoritative and requires asking when behavior or visual intent is ambiguous.

## Applied
No application CSS or component changes. A speculative global focus-ring or motion change would conflict with the repository's explicit design authority and could regress its keyboard-navigation model. The correct next step is a focused screen-by-screen review with approved acceptance criteria, not a blanket style patch.

## Not verified
No application build, screenshot comparison, keyboard walkthrough, worst-case transcript fixture, real-device test or motion recording was run here. This is a source review, not a claim of visual or accessibility certification.
