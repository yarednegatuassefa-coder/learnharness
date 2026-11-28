# LearnHarness AI and Resilience Rollout

## Approved pilot: learning-session evaluation loop

**Mode:** bounded agent workflow with versioned prompts, model/provider metadata and a fixed evaluation set.

**Purpose:** compare an assisted learning session against a no-skill baseline for diagnostic usefulness, concept repair and transfer.

**Authoritative sources:** learner-provided material, cited imported notes and the session's own provenance records. Generated explanations are hypotheses until supported or reviewed.

**Allowed output:** lesson plans, explanations, practice problems, confidence-calibrated feedback and provenance-linked knowledge-graph proposals.

**Forbidden actions:** claim mastery from one answer, silently overwrite supported knowledge, hide uncertainty, exfiltrate local files, run unbounded tool loops or transfer sensitive project data to external providers.

**Failure path:** checkpoint the session, preserve the last valid graph state, show the provider/tool error and allow a local/manual continuation. Bound steps, time, context and cost.

**Evaluation cases:** prerequisite-gap detection, misconception repair, delayed retrieval, transfer problem, contradictory source, unsupported claim, tool timeout and provider outage.

**Measures:** delayed retention, transfer performance, misconception recurrence, diagnostic calibration, completion time, escalation rate and cost per successful learning outcome.

## Existing resilience to preserve

Keep local data ownership, inspectable prompts, provider transparency, provenance links, synthetic fixtures and the distinction between immediate correctness and durable learning.
