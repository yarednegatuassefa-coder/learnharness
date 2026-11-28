# LearnHarness Workflow Governance

LearnHarness follows the portfolio [Workflow Quality and Evaluation Standard](https://github.com/yarednegatuassefa-coder/home/blob/main/standards/workflow-quality.md). This document defines how that standard applies to learning sessions and reusable agent skills.

## Priority workflows

| Workflow | Required outcome | Evaluation signals |
|---|---|---|
| Measure current understanding | Identify the learner's actual prerequisite gaps, not just self-reported familiarity | Diagnostic coverage, calibration against follow-up performance |
| Plan learning path | Build a dependency-aware route to the learner's stated goal | Prerequisite correctness, plan relevance, unnecessary-step rate |
| Teach | Build one reasoning step at a time and repair misunderstandings before proceeding | Concept checks, explanation quality, misconception recurrence |
| Practice | Test retrieval and transfer in varied, unfamiliar problems | Delayed retention, transfer performance, hint dependence |
| Knowledge graph | Preserve supported propositions and reasoning links with source-session provenance | Provenance completeness, contradiction rate, retrieval usefulness |
| Skill authoring | Produce bounded, portable workflows with explicit inputs, outputs and permissions | Evaluation pass rate, recovery coverage, portability |
| Publishing and artifact routing | Preserve editable source and route to a suitable renderer | Source preservation, output validity, citation/layout checks |

## Evaluation protocol

- Keep golden cases for stable diagnostic, teaching, practice and skill-authoring behaviors.
- Use realistic learner prompts and grade both the reasoning trajectory and final result.
- Include human-judged cases for pedagogical quality, nuance and transfer.
- Compare selected workflows with and without a skill/instruction when feasible; remove instructions that add tokens without improving learning outcomes.
- Test model and agent changes against the same baseline; record model/version, harness version and relevant settings.
- Do not equate a correct immediate answer or graph entry with durable learning. Use delayed retrieval and transfer evidence where available.

## Safety and privacy

- Use synthetic or properly de-identified examples for healthcare, customer, employee and financial exercises.
- Do not claim learner mastery from exposure, confidence or a single correct response.
- Preserve user control over files and local learning records.
- No external telemetry, prompt collection or data transfer is enabled by this document.
- Skills must not override host permissions or project-specific safety boundaries.

## Measurement

Track diagnostic usefulness, concept-check accuracy, misconception recurrence, delayed retention, transfer performance, practice completion, skill evaluation quality, latency and cost per successful learning outcome. Distinguish measured results from estimates and self-reports.

## Current implementation status

This is a domain-specific operating and evaluation plan. It does not assert that all metrics are instrumented or that every workflow has passed evaluation. Record actual test evidence and limitations in the project repository.

## Letter 5 implementation

See the shared [Portfolio AI and Resilience Standard](https://github.com/yarednegatuassefa-coder/home/blob/main/standards/ai-resilience.md) and the LearnHarness [AI/resilience rollout](ai-resilience-rollout.md). The first pilot is a bounded evaluation loop measured on transfer and retention, not immediate answer correctness alone.
