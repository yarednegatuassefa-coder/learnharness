# Forward Deployed Engineer (FDE) Learning Pathway

**Programme:** Strategic Learning Programme  
**Type:** Cross-disciplinary career pathway  
**Status:** Proposed pathway specification  
**Primary track:** AI Engineering Learning Path  
**Related disciplines:** Business and Entrepreneurship; Psychology and Human Behaviour; Economics and Wealth; Supply Chain and Logistics; Healthcare Data Analysis; Propaganda, Strategic Communication and Influence; Mechanistic Interpretability, AI Safety and Model Auditing.

## Purpose

This pathway develops the ability to discover, design, build, integrate, deploy, and improve AI-enabled systems inside real organisations. A Forward Deployed Engineer (FDE) works at the boundary of software engineering, AI systems, product delivery, and customer operations.

The goal is not to collect course certificates or learn one vendor's tools. The goal is demonstrated ability to turn an ambiguous operational problem into a secure, reliable, measurable production workflow.

This is a **career pathway**, not discipline 13. It composes existing programme disciplines and the AI Engineering Learning Path into one applied progression.

## Target competencies

By the end, the learner should be able to:

1. Conduct structured discovery with stakeholders and map an operational workflow.
2. Translate business pain into a scoped technical problem, success metric, and deployment plan.
3. Explain LLM APIs, tokens, context windows, structured outputs, tool calling, and model limitations.
4. Build agent loops with explicit state, tool permissions, validation, retries, and human approval boundaries.
5. Integrate systems using APIs, webhooks, databases, authentication, and Model Context Protocol (MCP).
6. Build reusable agent capabilities and instructions, including skills, tools, and evaluation cases.
7. Use AI coding agents responsibly while reviewing, testing, and understanding generated code.
8. Deploy and operate an application with secrets management, observability, access control, rollback, and incident procedures.
9. Evaluate quality, reliability, latency, cost, safety, and business impact.
10. Communicate trade-offs and technical decisions to both technical teams and business stakeholders.

## Six-stage progression

### Stage 1 — FDE role, customer discovery, and workflow analysis

**Questions:** What problem is worth solving? Who experiences it? How does the work happen today? What evidence would prove improvement?

**Topics**
- FDE responsibilities and the boundary between engineering, product, and consulting.
- Stakeholder interviews and observation of real work.
- Current-state and future-state workflow mapping.
- Jobs to be done, user journeys, bottlenecks, exception paths, and failure costs.
- Problem statements, scope control, assumptions, constraints, and acceptance criteria.
- Baselines and measurable outcomes: time, cost, conversion, error rate, throughput, satisfaction, and risk.

**Evidence of mastery:** Produce a discovery brief that identifies users, workflow, pain point, baseline, constraints, risks, success metrics, and a justified decision to build, not build, or investigate further.

**Practice:** Map one real workflow in Cloud L, Melat Supermarket, or MMV Medical. Interview or observe a stakeholder where possible; label assumptions when direct evidence is unavailable.

### Stage 2 — LLM platforms and application fundamentals

**Questions:** How does an application communicate with a model, and what makes an LLM integration reliable enough to use?

**Topics**
- API requests and responses, authentication, model selection, tokens, context windows, and rate limits.
- System and developer instructions, message roles, structured output, JSON schemas, and tool definitions.
- Streaming, timeouts, retries, idempotency, error handling, and cost control.
- Prompt design as one component of a larger software system.
- Model selection and trade-offs among quality, latency, cost, privacy, and capability.
- Data handling, secrets, logging, and provider-specific dependencies.

**Evidence of mastery:** Build a small application that calls a model, validates structured output, handles provider errors, protects secrets, and records basic cost and latency metrics.

**Practice:** Start with a minimal, non-sensitive workflow and a small test dataset. Use an approved provider or local model; never commit API keys.

### Stage 3 — Agent loops, tools, MCP, and skills

**Questions:** When should a model call a tool? How does an agent remain bounded, observable, and safe?

**Topics**
- Agent loop: model response, tool selection, tool execution, result handling, and termination.
- Tool schemas, input validation, authorization, least privilege, and deterministic application logic.
- State management, context assembly, memory boundaries, and handoffs.
- MCP concepts: hosts, clients, servers, tools, resources, prompts, transports, and trust boundaries.
- Agent skills: reusable task instructions, supporting files, progressive disclosure, and versioning.
- Human-in-the-loop approvals for consequential actions.
- Prompt injection, untrusted tool output, data exfiltration, and confused-deputy risks.
- When a simple workflow or deterministic function is preferable to an autonomous agent.

**Evidence of mastery:** Build an agent that uses at least two bounded tools, validates inputs and outputs, handles tool failure, records its actions, and requests approval before a consequential operation.

**Practice:** Create a read-only research or operations assistant first. Add write permissions only after defining authorization, confirmation, audit, and rollback controls.

### Stage 4 — AI-assisted software delivery and integration engineering

**Questions:** How do we turn a prototype into a maintainable system connected to real business infrastructure?

**Topics**
- Claude Code and other coding agents: repository context, plans, edits, terminal commands, tests, and review.
- Git branches, commits, pull requests, code review, and change traceability.
- Application architecture, frontend/backend boundaries, databases, schemas, migrations, and data contracts.
- REST APIs, webhooks, queues, background jobs, and external service integrations.
- Authentication, authorization, roles, tenant boundaries, and secure session handling.
- Automated tests: unit, integration, end-to-end, regression, and evaluation tests.
- Dependency management, configuration, environment variables, and reproducible builds.
- Human review of AI-generated code; never equate generated output with verified correctness.

**Evidence of mastery:** Deliver a version-controlled application integrated with a sandbox or test service, with documented architecture, automated tests, error handling, and a reviewable change history.

**Practice:** Integrate one external service in a sandbox. Keep payment execution, patient-facing clinical decisions, financial posting, and other high-impact actions behind deterministic controls and explicit authorization.

### Stage 5 — Production deployment, reliability, security, and evaluation

**Questions:** What changes when real users and real data depend on the system?

**Topics**
- Deployment environments, build pipelines, configuration, secrets, and release strategies.
- Monitoring, structured logs, traces, metrics, alerting, and incident response.
- Availability, latency, throughput, rate limits, retries, circuit breakers, and graceful degradation.
- Data privacy, retention, access controls, encryption, audit logs, and threat modelling.
- Evaluation datasets, representative cases, edge cases, adversarial tests, and human review.
- Quality metrics: task success, groundedness, schema validity, escalation correctness, and failure severity.
- Cost per successful task, model routing, caching, and usage budgets.
- Rollbacks, backups, recovery tests, version pinning, and change management.
- Ongoing monitoring for model/provider changes and workflow drift.

**Evidence of mastery:** Deploy a limited-scope system to a controlled environment and produce a release dossier with architecture, threat model, evaluation results, monitoring plan, rollback procedure, known limitations, and operating cost.

**Practice:** Run failure drills: provider outage, malformed model output, unavailable tool, expired credentials, duplicate webhook, prompt injection, and unauthorized request.

### Stage 6 — Field deployment and measurable business impact

**Questions:** Can the system survive real operational conditions and produce a verified improvement?

**Topics**
- Pilot design, user onboarding, training, feedback loops, and adoption barriers.
- Shadow mode, staged rollout, human review, and progressive autonomy.
- Workflow integration and exception handling.
- Before/after measurement and attribution limits.
- Operational ownership, support, documentation, service levels, and handover.
- Communicating trade-offs, risks, costs, and results to decision-makers.
- Continuous improvement from incidents, evaluations, and user feedback.

**Evidence of mastery:** Deliver a field-deployment case study with a working system, stakeholder sign-off, baseline and post-deployment measurements, evaluation evidence, operating documentation, and a candid account of failures and limitations.

## Anthropic Academy learning resources

Use these public courses as a vendor-specific introduction to core concepts. Course availability and titles can change; check the official academy for current content.

**Official catalogue:** [Claude Academy](https://academy.claude.com/)

Recommended sequence:

1. **Claude Platform 101** — API fundamentals, agent loops, tools, MCP, and skills.
2. **Claude Code 101** — foundational use of Claude Code for software work.
3. **Claude Code in Action** — practical coding-agent workflows.
4. **Introduction to Model Context Protocol** — MCP architecture and integrations.
5. **Introduction to Agent Skills** — reusable agent capabilities and instructions.
6. **AI Fluency: Framework & Foundations** — effective and responsible human-AI collaboration.

These courses are learning inputs, not proof of FDE competence. Record completion separately from demonstrated mastery. Do not assume a course is free, available, or sufficient without checking its current official listing and eligibility.

## Cross-disciplinary dependency map

The FDE pathway reuses existing disciplines rather than duplicating them:

- **Business and Entrepreneurship:** customer discovery, business models, value propositions, operations, and ROI.
- **Psychology and Human Behaviour:** interviewing, adoption, incentives, cognitive load, and human factors.
- **Economics and Wealth:** cost-benefit analysis, unit economics, productivity, and capital allocation.
- **Supply Chain and Logistics:** workflow dependencies, process mapping, bottlenecks, traceability, and resilience.
- **Healthcare Data Analysis:** data quality, measurement, privacy, statistics, and decision support.
- **Propaganda, Strategic Communication and Influence:** stakeholder communication, persuasion, narrative clarity, and ethical change management.
- **Mechanistic Interpretability, AI Safety and Model Auditing:** evaluation, threat modelling, model limitations, safety claims, and audit evidence.
- **AI Engineering Learning Path:** the technical spine—software, APIs, models, agents, integration, deployment, and operations.

## Applied capstone portfolio

Complete at least one end-to-end deployment case study. The following projects provide realistic contexts; use synthetic or properly authorized data.

### MMV Medical — multilingual patient coordination

Build an administrative assistant for enquiry classification, language routing, lead qualification, appointment requests, and staff handoff.

**Boundaries:** It must not diagnose, prescribe, invent provider credentials, or independently make clinical decisions. Escalate clinical, urgent, ambiguous, and unsupported requests to qualified staff. Apply strict privacy and consent controls.

**Measures:** response time, lead qualification accuracy, appointment conversion, escalation accuracy, language quality, and staff workload.

### Cloud L — restaurant operations assistant

Build an assistant for menu questions, order-status enquiries, reservation questions, and staff support.

**Boundaries:** Keep payment authorization, refunds, order state transitions, and reservation commitments in validated application logic. The agent may propose actions; it must not bypass business rules.

**Measures:** task completion, order-information accuracy, escalation rate, response time, and cost per resolved enquiry.

### Melat Supermarket — inventory and purchasing intelligence

Build an assistant that summarizes sales, identifies replenishment candidates, and explains stock anomalies.

**Boundaries:** Recommendations must be traceable to source data. Purchasing, pricing, accounting entries, and cash reconciliation require deterministic controls and owner authorization.

**Measures:** forecast error, stockout rate, overstock, inventory variance, and time spent preparing purchasing decisions.

### Home — portfolio operations agent

Build a read-only assistant that can inspect approved project documentation, summarize deployment health, identify open risks, and prepare change plans.

**Boundaries:** Use least-privilege access, explicit tool allowlists, audit logs, and human approval for writes, deployments, secrets, billing, or destructive operations.

**Measures:** issue-detection quality, false-alarm rate, time to diagnosis, traceability, and policy compliance.

## Portfolio evidence required for completion

A learner should not be marked FDE-ready because they completed courses or built a demo. The portfolio must contain:

1. Discovery brief and current/future workflow diagrams.
2. Architecture diagram and documented data flows.
3. Working, version-controlled application and integration.
4. Test suite and reproducible AI evaluation dataset.
5. Security and privacy threat model.
6. Deployment record, monitoring, rollback, and incident runbook.
7. Cost and performance measurements.
8. Before/after business impact analysis with limitations.
9. Stakeholder handover and user documentation.
10. Retrospective documenting failures, trade-offs, and next improvements.

## Readiness rubric

Assess each dimension separately using evidence, not self-reported confidence:

- **Foundational:** can explain concepts and complete guided exercises.
- **Practitioner:** can independently build and test a bounded feature.
- **Deployment-capable:** can integrate, secure, deploy, monitor, and troubleshoot a system with review.
- **Field-capable:** can lead discovery, deliver a production workflow, manage stakeholders, and demonstrate measured impact.

The pathway is complete only when the learner demonstrates field-capable performance across discovery, engineering, safety, operations, and communication. This is a learning standard, not a guarantee of employment or equivalence to a particular company's hiring bar.

## Learning method

Use the existing LearnHarness method throughout: diagnose current understanding, identify prerequisite gaps, plan the minimal dependency path, teach one reasoning step at a time, check each step, repair misconceptions, and use varied retrieval and transfer practice. The learner advances on demonstrated understanding and practical evidence—not on time spent or content completed.
