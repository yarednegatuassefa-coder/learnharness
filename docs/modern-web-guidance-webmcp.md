# WebMCP / Modern Web Guidance — LearnHarness

## Adoption status
Modern Web Guidance and the WebMCP Origin Trial gate are configured for this repository. No WebMCP tool is attached to the chat composer: it is the core learner interaction, not a discrete site action, and annotating it would create an ambiguous tool surface.

## Future eligible surfaces
Only add declarative tools to discrete, labelled, self-contained forms such as read-only resource search or settings lookup. Do not expose learner messages, assessments, progression controls, account settings, API keys, or destructive session controls as agent tools. Preserve the learner's assessment/progression model.

## Test
Run normal app checks and verify any future tool is read-only or user-confirmed, has a stable schema, and does not bypass learner progression or authorization.
