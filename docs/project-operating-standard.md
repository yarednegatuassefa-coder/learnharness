# Universal Project Operating Standard

**Status:** Portfolio-wide operating standard  
**Applies to:** Every current and future project, product, business, and operational system  
**Version:** 1.0

## 1. Purpose

Use one consistent method to design, operate, evaluate, and improve projects without forcing every project into the same software stack.

The standard separates three layers:

1. **Universal governance:** specifications, evaluation, quality, measurement, incident learning, security, and change control.
2. **Project-specific workflows:** domain knowledge, operating procedures, skills, and success metrics.
3. **Execution systems:** people, software, APIs, databases, scripts, AI agents, and external providers.

A skill is one way to package a workflow. It is not the only way. Deterministic work belongs in code, SQL, or established software; AI is used where interpretation, synthesis, or judgment adds value.

## 2. Non-negotiable design principles

1. **Outcome before activity.** Define the user or business outcome before choosing tools or agents.
2. **Specify before implementation.** Every material workflow has an owner, purpose, inputs, outputs, constraints, and acceptance criteria.
3. **Source before rendering.** Preserve editable source data and documents; generated PDFs, dashboards, and presentations are outputs, not the only copy.
4. **Deterministic before probabilistic.** Use code, formulas, database constraints, and APIs for repeatable calculations and state changes. Use models for ambiguous reasoning and communication.
5. **Least privilege.** Give each workflow only the data and permissions it needs.
6. **Human approval at consequential boundaries.** Require explicit approval for payments, refunds, purchases, patient-facing commitments, publication, deletion, legal commitments, and other high-impact actions.
7. **Evidence over confidence.** Verify outputs against source data, tests, and real-world results.
8. **Portable by design.** Keep core specifications and data formats independent of a single model or vendor where practical.
9. **Fail visibly and recover safely.** Errors must be detectable, logged appropriately, and recoverable; never silently substitute incorrect values.
10. **Improve or retire.** Review performance, remove redundant instructions, and retire workflows that no longer add value.

## 3. Required workflow specification

Every production workflow must have a specification based on `templates/workflow-spec.md`. At minimum, record:

- Workflow name, version, owner, and status.
- Problem, intended users, and measurable outcome.
- Trigger, required inputs, data sources, and expected outputs.
- Ordered steps and the tool or actor responsible for each step.
- Allowed actions, forbidden actions, and permission boundaries.
- Human approval points and escalation route.
- Failure modes, recovery instructions, and rollback approach.
- Acceptance criteria, evaluation cases, and review date.

Small experiments may begin with a lightweight specification. No workflow may become production-critical without the required fields.

## 4. Quality lifecycle and tiers

| Tier | Meaning | Minimum control |
| --- | --- | --- |
| Experimental | New, unproven, or under revision | Named owner; isolated tests; no unsupervised consequential actions |
| Core | Reused across a project or team | Peer review; documented spec; evaluation suite; version history |
| Trusted / Always-on | Foundational and enabled broadly | Strong regression coverage; security and privacy review; monitoring; accountable maintainer |

Promotion is evidence-based, not popularity-based. A high invocation count does not prove quality. Demote or retire a workflow when its performance degrades, its dependencies become unsafe, or a simpler alternative performs as well.

## 5. Evaluation standard

Each important workflow should be evaluated in three complementary ways:

- **Golden cases:** fixed inputs and explicit expected properties; use mocks for external tools where possible.
- **Realistic cases:** representative user requests and operating conditions, graded on correctness, completeness, and appropriate tool use.
- **Owner / human review:** domain experts judge cases where context, safety, or quality cannot be reliably reduced to an automatic score.

Evaluate both the final outcome and the execution trajectory:

- Did it choose the right workflow and tools?
- Did it follow the required sequence?
- Did it verify intermediate results?
- Did it respect permission and approval boundaries?
- Did it recover correctly from expected failures?
- Was the final result accurate, useful, and complete?

Use the template in `templates/evaluation-case.md`. Keep a baseline and compare material changes against it. Do not optimize for a 100% score by making tests trivial; test meaningful variation and known failure modes.

## 6. Measurement

Choose a small number of metrics that connect workflow performance to project outcomes.

**Workflow-level measures**
- Success rate and quality score.
- Error and retry rate.
- Time to completion and latency.
- Cost per successful completion, including model, API, infrastructure, and human review where measurable.
- Human override or escalation rate.
- Usage, repeat use, and abandonment.

**Project-level measures**
- Revenue, margin, cash flow, retention, conversion, reliability, safety, delivery performance, or learning transfer—as appropriate to the project.

Record only what is needed. Do not collect prompt text, private files, personal data, or sensitive records by default. Define retention, access, and consent requirements before introducing telemetry. Report missing or estimated measurements honestly.

## 7. Failure reporting and improvement loop

For a material failure, capture:

1. What the operator or agent attempted.
2. What should have happened.
3. What actually happened, including the observable error.
4. Impact and severity.
5. Reproduction steps and relevant non-sensitive evidence.
6. Root cause, corrective action, and owner.

Triage repeated failures, fix the underlying workflow or dependency, and add a regression case. Do not treat repeated retries or prompt length as a root-cause fix. Agents may draft failure reports; a responsible person validates and prioritizes them.

## 8. Automation and approval boundaries

| Action | Default policy |
| --- | --- |
| Read public information or approved internal reference data | May automate within access permissions |
| Draft, classify, summarize, calculate, or prepare recommendations | May automate; verify according to risk |
| Change operational records or send routine notifications | Automate only with scoped permissions, validation, and audit trail |
| Charge, refund, transfer, purchase, or commit funds | Human approval required |
| Make patient-specific clinical decisions or promises | Qualified human decision-maker required |
| Publish externally, sign agreements, delete important data, or change access controls | Human approval required |
| Handle personal, financial, or health information | Data minimization, access control, secure handling, and applicable law required |

Project owners must tighten these controls where local law, contracts, platform rules, or business risk require it.

## 9. Portability and architecture

- Store workflow specifications and reusable instructions in version control where appropriate.
- Keep business rules and canonical data separate from model prompts.
- Prefer stable APIs and documented interfaces over fragile UI automation.
- Use scripts or services for deterministic multi-step tool operations.
- Keep large tool results and sensitive data out of model context unless needed.
- Make model/provider-specific adaptations explicit and test them.
- Do not install every available tool definition into every agent session; expose only the tools required for the task.
- Keep secrets in approved secret stores, never in repository files or prompts.

## 10. Project adoption map

| Project | Priority workflows | Outcome measures |
| --- | --- | --- |
| LearnHarness | Learning diagnosis, lesson planning, teaching, practice, skill authoring and evaluation | Learning transfer, retention, task success, evaluation quality |
| Cloud L | Ordering, payment reconciliation, SMS notifications, kitchen routing, delivery and customer support | Order completion, payment match rate, error rate, repeat orders, contribution margin |
| Melat Supermarket | Purchasing, supplier comparison, inventory, pricing, cash reconciliation and promotions | Gross margin, stockout rate, shrinkage, inventory turnover, cash flow |
| MMV Medical | Lead qualification, patient coordination, provider matching, appointments and follow-up | Qualified leads, response time, conversion, patient satisfaction, compliance |
| Film / screenwriting | Research, story development, screenplay review, shot planning and production scheduling | Script quality, production readiness, schedule adherence, budget variance |
| Supply chain and logistics | Demand planning, procurement, warehouse control, routing and delivery exceptions | Forecast error, inventory accuracy, on-time delivery, cost per shipment |

This map is an initial portfolio baseline, not a claim that these workflows are already implemented. Add projects through the same specification and evaluation process.

## 11. Implementation sequence

Adopt incrementally; do not halt working operations to retrofit everything at once.

1. Inventory active projects, critical workflows, owners, systems, and risks.
2. Select the highest-value or highest-risk workflow in each project.
3. Write its specification and define the outcome metric.
4. Establish a small evaluation baseline, including failure cases.
5. Add validation, recovery, and human approval gates.
6. Automate deterministic steps; keep model use focused on judgment and synthesis.
7. Measure real performance and costs.
8. Review failures and update tests.
9. Promote, revise, or retire the workflow based on evidence.
10. Reuse proven components across projects only where their assumptions genuinely match.

## 12. Definition of done

A workflow is not production-ready merely because it runs once. It is ready when:

- Its owner and purpose are clear.
- Its inputs, outputs, permissions, and approval gates are documented.
- Its important success and failure cases are tested.
- Its outputs are validated before consequential use.
- It has actionable recovery instructions.
- Its costs and operational outcomes can be assessed.
- Its data handling is appropriate for the information involved.
- A person is accountable for maintenance and review.

**Operating rule:** one common standard, domain-specific workflows, and the simplest reliable execution mechanism.
