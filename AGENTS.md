<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# No guessing

All design authority belongs to the human. **Never guess a design or implementation decision.** If anything is ambiguous — naming, behavior, data shapes, UX, defaults, scope boundaries, prompt wording — STOP and ask with the ask-user-question tool before proceeding. If you are "a little unsure," you are unsure: ask. A wrong guess is far more expensive than a question. Ask early, ask specific, one question per call.

Concretely: first investigate and plan rigorously (asking the user design questions along the way), get the plan approved by the user, and only then implement. Implementation should be mechanical execution of an approved plan — not interpretation.


## Emil Kowalski design-engineering skills

For interface and interaction work, use the upstream [Emil Kowalski skills](https://github.com/emilkowalski/skills) through the shared Home skill installation. The Home catalog is the portfolio routing reference: https://github.com/yarednegatuassefa-coder/home/blob/main/skills/README.md.

Apply only the skill that matches the task; do not invoke the entire collection by default. This is a learning and knowledge-work interface. Prioritize cognitive clarity, readable lesson progression, accessible interactive explanations, responsive content, and low-distraction motion. Animation should explain transitions or provide feedback, not compete with reasoning. Preserve the human-approved design authority and ask before ambiguous product decisions.

- **Design baseline:** consult `emil-design-eng` for relevant UI/animation decisions; preserve the product's existing design tokens and component conventions.
- **Build motion:** use `animate` for requested motion, `choreograph` for coordinated sequences, and `gestures` / `animate-expo` only when the product actually has gesture or Expo-native interactions.
- **Audit and repair:** use `review-animations` for changed motion, `improve-animations` for a codebase-wide motion audit and plans, `animation-performance` for dropped frames, and `remove-animations` when motion is unnecessary.
- **Responsive/mobile QA:** use `mobile-native` for mobile-web behavior and `break-ui` for worst-case content and layout stress tests.
- **Architecture and exploration:** use `pick-ui-library` before adding a UI dependency; use `prototype` when comparing interaction concepts; use `apple-design` only when its platform principles fit the product.
- **Learning and routing:** use `ask-emil` when the right design skill or sequence is unclear; use `learn-taste` at the end of a design session to capture approved corrections as durable project rules. Use `ask-sonner` only if this project uses Sonner.

**Quality gates:** motion must have a user-facing purpose, respect frequency and performance budgets, support `prefers-reduced-motion`, and avoid animating high-frequency or information-dense workflows. Prefer no animation over decorative motion. Keep keyboard and primary operational flows immediate. Reuse existing tokens and dependencies; do not add a library or alter the visual system without task scope and approval. Validate desktop/mobile, keyboard/focus, reduced-motion, loading/empty/error states, and long/unusual content as applicable.

These skills do not override this repository's domain, security, privacy, accessibility, financial, clinical, or release safeguards. Skill availability is not authorization to install dependencies, call paid services, access production data, publish, or deploy.
