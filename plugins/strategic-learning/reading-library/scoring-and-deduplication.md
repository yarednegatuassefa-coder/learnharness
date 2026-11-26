# Scoring and duplicate-review protocol

## Weighted priority
Each dimension is scored 0–5 with a one-sentence rationale.
- Intellectual value (40%): conceptual depth, explanatory power, evidence quality, originality and durability.
- Practical application (35%): concrete frameworks, methods, transferable skills and useful case material.
- Relevance (25%): fit with the twelve disciplines, active projects and current learning goals.

Composite = 0.40 × intellectual value + 0.35 × practical application + 0.25 × relevance.

- 4.25–5.00: high-priority candidate
- 3.50–4.24: strong candidate
- 2.75–3.49: selective / optional
- Below 2.75: low immediate priority

This is an editorial heuristic, not a scientific measurement. Revise scores when goals or evidence change.

## Duplicate matching
1. Normalize Unicode, punctuation, subtitle separators, whitespace and case.
2. Match exact normalized title first.
3. Compare author/editor, series/volume and ISBN/edition.
4. Mark fuzzy matches possible_match; never silently merge them.
5. Preserve source provenance when two sources recommend the same book.
6. Distinguish repeated recommendations from duplicate physical-library records.

## Current verification boundary
- Repository: inspected Strategic Learning Programme files; no existing a16z catalogue was found in those files.
- Lastbook: not inspected. It is separate and no library export was supplied. All seed records therefore remain external_inventory_unchecked.
- A complete duplicate audit requires only title, author, edition and optional ISBN; private annotations are unnecessary.

## Editorial controls
Preserve publisher genre/subgenre exactly. Keep LearnHarness discipline tags separate. A recommendation is not an evidence-based endorsement. Verify medical, financial, political and technical claims independently. A reading record never changes learner progress by itself.
