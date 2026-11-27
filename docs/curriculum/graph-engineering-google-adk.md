# Graph Engineering with Google Agent Development Kit (ADK)

**Programme:** Strategic Learning Programme  
**Discipline:** AI Engineering / Multi-Agent Systems  
**Status:** External learning module; optional, not a mandatory assignment  
**Prerequisites:** Basic Python reading, LLM/agent fundamentals, and workflow concepts  
**Estimated effort:** 6–10 focused hours, adjusted to diagnostic results  
**Primary reference:** Google's Agent Development Kit (ADK) and Graph Engineering materials

## Purpose

Learn to design multi-agent workflows as explicit graphs with clear state, control flow, bounded execution, and evaluation. The objective is not to maximize the number of agents. It is to choose the simplest graph that reliably completes a task.

## Outcomes

The learner can:
1. Represent a workflow as nodes, directed edges, state contracts, and terminal conditions.
2. Choose between sequential, parallel fan-out/join, routing, loop/refinement, and human-in-the-loop patterns.
3. Define typed, bounded inputs and outputs for agents and deterministic tools.
4. Prevent race conditions by assigning distinct worker result keys and using explicit aggregation.
5. Route safely with allowlisted destinations and a fallback for ambiguity.
6. Bound loops, retries, time, context, and cost.
7. Evaluate both final quality and execution trajectory.
8. Build and explain a small ADK workflow and identify when deterministic code is preferable to an LLM.

## Dependency map

```text
Agent basics
  -> workflow graphs and state
  -> sequential nodes
  -> fan-out / parallel workers
  -> join / aggregation
  -> routers and conditional edges
  -> loops, retries, and termination
  -> human approval and permissions
  -> evaluation, observability, and cost
  -> capstone: graph-based PR review
```

## Learning stages

### 1. Graph vocabulary and state

Study nodes, edges, directed acyclic graphs, cycles, state, reducers/aggregation, entry and exit nodes. Draw a workflow before coding it. Identify what each node owns and what it may read/write.

**Check:** Explain why a graph is more inspectable than a single agent with a long prompt, and identify one case where a graph is unnecessary.

### 2. Sequential workflow

Build a pipeline: input validation → research/planning → synthesis → output validation. Keep deterministic validation outside the model.

**Practice:** Pass only a compact structured result between steps. Add a failure edge and a clear terminal status.

### 3. Fan-out and join

Dispatch independent review tasks concurrently. Each worker returns a bounded result envelope to its own state key. The join validates completeness, deduplicates findings, and creates a summary.

**Check:** Explain race conditions, partial results, quorum vs all-required joins, and why worker failures cannot count as clean results.

### 4. Router and conditional control

Use a classifier to select among allowlisted routes. Keep policy and permission decisions deterministic. Add low-confidence and unknown-category fallbacks.

**Practice:** Route PR changes to relevant specialists; ensure correctness is always reviewed and sensitive changes add security/data-integrity checks.

### 5. Loops and recovery

Add a bounded critique/refinement cycle with max iterations, deadline, no-progress detection, cancellation, and a terminal best-result state. Retry only transient failures with backoff.

**Check:** Explain how to avoid infinite loops and why retries do not repair deterministic defects.

### 6. Human approval and safety

Model approval as a graph node with a specific proposed action, target, evidence, and expiration. Changed action/target requires renewed approval. Separate read-only analysis from privileged execution.

**Practice:** The graph can prepare a PR review and recommendation, but cannot approve itself, merge, or deploy.

### 7. Evaluation and observability

Test golden cases, realistic cases, adversarial prompt-injection cases, worker timeout/failure, malformed outputs, empty diffs, large diffs, and ambiguous routes. Measure outcome and trajectory: material issue recall, precision, evidence validity, completion, latency, cost, retries, and approval compliance.

## Capstone: Multi-agent PR review

Implement this reference graph:

```text
PR metadata + diff
  -> deterministic validation
  -> router
  -> parallel: correctness | security | architecture | tests
  -> join + schema validation + deduplication
  -> deterministic severity/check gate
  -> human approval
  -> optional review submission (privileged, separate)
```

Use a synthetic or closed PR. Agents are read-only; do not execute untrusted PR code. Do not send secrets, patient/customer records, or unrelated repository data to model providers. The capstone passes when the learner can explain each node, demonstrate a worker failure, show a safe incomplete-review outcome, and compare findings with a human baseline.

## ADK implementation notes

Use the official ADK documentation and current examples as the API source of truth; APIs evolve. Begin with ADK's workflow primitives (sequential, parallel, loop, and custom agent behavior) where they fit. Use custom graph/control logic only when required. Keep deterministic validation, routing constraints, aggregation, and gates in ordinary Python. Pin dependencies in a project environment, never install packages globally for the exercise.

## Suggested external resources

- [Google ADK documentation](https://google.github.io/adk-docs/)
- [ADK workflow agents](https://google.github.io/adk-docs/agents/workflow-agents/)
- [Google Codelabs](https://codelabs.developers.google.com/)
- [Google Cloud Tech YouTube](https://www.youtube.com/@GoogleCloudTech)

## Completion evidence

- A graph diagram with nodes, edges, state, permissions, and termination.
- Working sequential and parallel examples.
- Router allowlist plus safe fallback.
- Test proving a failed worker yields an incomplete review.
- Evaluation results and known limitations.
- Human approval checkpoint demonstrated.
- Short explanation of why each model node is necessary.
