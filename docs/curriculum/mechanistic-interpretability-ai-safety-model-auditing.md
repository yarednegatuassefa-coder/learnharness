# Mechanistic Interpretability, AI Safety and Model Auditing

**Programme:** Strategic Learning Programme  
**Discipline:** 12 of 12  
**Status:** Integrated programme discipline  
**Prerequisites:** AI foundations and basic machine-learning concepts; no advanced mathematics or coding assumed at entry  
**Learning objective:** Build the ability to reason about model internals, evaluate safety claims, and conduct evidence-based audits of AI systems.

This is **discipline 12** in the existing Strategic Learning Programme—not a separate course. It extends the AI Engineering Learning Path: AI engineering develops the ability to build and operate AI systems; this discipline develops the ability to inspect their internal mechanisms, test safety claims, and audit their behaviour. Learn it through LearnHarness's existing diagnosis, dependency-aware planning, stepwise teaching, checks, retrieval practice, and practical investigations. The learner enters through the existing programme and advances by demonstrated understanding and transfer, not by completing material.

## Why this discipline matters

A model's visible answers do not fully reveal what it represents or what it can do. Mechanistic interpretability studies internal computations and representations. AI safety asks how those mechanisms relate to harmful capabilities, misalignment, robustness, and control. Model auditing turns those questions into repeatable tests and evidence.

Neuron-level interpretability is one useful lens, not a complete explanation of a model. A neuron may respond to several inputs, a fact may be distributed across many neurons, and an observed activation does not by itself establish causal importance. Always distinguish correlation, intervention, and causal evidence.

## Competencies

By the end, the learner should be able to:

1. Explain the basic computational structure of a neural network and a transformer.
2. Distinguish parameters, neurons, activations, features, circuits, attention heads, residual streams, and representations.
3. Explain polysemanticity, superposition, distributed representations, feature directions, and the limits of neuron-level explanations.
4. Interpret activation and attribution evidence without confusing it with causal proof.
5. Describe activation patching, ablation, steering, probing, and controlled interventions at a conceptual level.
6. Design an audit that tests a specific safety claim with baselines, controls, adversarial cases, and reproducible records.
7. Evaluate harmful-capability detection, hidden behaviours, backdoors, refusal behaviour, and unlearning claims.
8. Communicate uncertainty, limitations, false positives, false negatives, and residual risk to technical and non-technical decision-makers.

## Six-stage learning path

### Stage 1 — Neural-network foundations

**Questions:** What is a parameter? What does a neuron compute? How does information move through layers?

**Topics**
- Vectors, matrices, functions, weights, biases, activations, and nonlinearities.
- Forward passes, loss, gradient descent, and training versus inference.
- Embeddings, tokenization, and the transformer at a high level.
- Attention, MLP blocks, residual connections, and normalization.

**Evidence of mastery:** Trace a simple input through a small network and explain what each component contributes. Explain the transformer without relying on analogies alone.

**Practice:** Draw and annotate a small neural network and a transformer block. Use a small interactive or visual example before attempting code.

### Stage 2 — Representations and the neuron basis

**Questions:** What does it mean for a neuron to represent a concept? Why can one neuron respond to several apparently unrelated inputs?

**Topics**
- Neuron activations versus contribution to downstream outputs.
- Polysemanticity and superposition.
- Sparse and distributed representations.
- Features, directions, circuits, and the difference between a feature and a neuron.
- Cross-layer representation changes and representational stability.
- Why facts can be distributed yet remain detectable.

**Evidence of mastery:** Given a neuron-interpretability claim, identify what was measured, what was inferred, and what remains unknown.

**Research case study:** Anthropic Fellows' 2026 neuron-basis work. Reconstruct the three motivating objections—polysemanticity, layer-to-layer changes, and distributed facts—and assess how output-contribution analysis changes the conclusions. Treat reported findings as bounded by the models, tasks, and methods tested.

### Stage 3 — Mechanistic investigation methods

**Questions:** How can we move from observing a pattern to testing whether it matters?

**Topics**
- Activation collection and visualization.
- Feature attribution and probing.
- Ablation and activation patching.
- Causal interventions versus correlational inspection.
- Steering vectors and neuron-level steering.
- Circuit analysis and mechanistic explanations.
- Reproducibility, controls, confounders, and measurement limitations.

**Evidence of mastery:** Design a small investigation with a hypothesis, intervention, control condition, expected observations, and at least one alternative explanation.

**Practice:** Work through a toy model or published notebook. Coding is introduced only when it materially improves the investigation; begin with guided notebooks and precomputed activations.

### Stage 4 — AI safety and hidden behaviours

**Questions:** What can a model retain after fine-tuning, refusal training, or unlearning? How might a model behave differently under conditions not covered by ordinary tests?

**Topics**
- Capability elicitation and harmful-content detection.
- Refusal mechanisms and policy compliance.
- Backdoors, trigger-conditioned behaviour, and data poisoning.
- Fine-tuning, representation shifts, and hidden capabilities.
- Unlearning claims and residual knowledge.
- Distribution shift, adversarial prompts, and evaluation leakage.
- Threat modelling and responsible disclosure.

**Evidence of mastery:** Build a threat model for a narrowly scoped model behaviour and specify tests that could falsify the safety claim.

**Safety boundary:** Use toy models, synthetic prompts, and benign demonstrations. Do not develop operational malware, exploit chains, weapons guidance, or real-world harmful capability demonstrations.

### Stage 5 — Model auditing and evaluation

**Questions:** How do we know whether a safety intervention worked, and how strong is the evidence?

**Topics**
- Audit scope, claims, assumptions, and threat models.
- Golden test cases, realistic test cases, and human review.
- Baselines, ablations, negative controls, and adversarial cases.
- Precision, recall, false-positive and false-negative costs.
- Calibration, robustness, reproducibility, and version drift.
- Audit trails, model cards, limitations, and risk communication.
- Evaluating detectors and steering methods without treating benchmark scores as universal guarantees.

**Evidence of mastery:** Produce a concise audit report that another reviewer can reproduce, including methods, results, uncertainty, limitations, and residual risk.

### Stage 6 — Applied interpretability and governance

**Questions:** How should internal evidence influence deployment decisions, product controls, and ongoing monitoring?

**Topics**
- Combining behavioural evaluations with internal model evidence.
- Model and dataset versioning.
- Monitoring for regressions after model updates or fine-tuning.
- Escalation criteria and human review.
- Privacy-preserving evaluation and data minimization.
- Governance, accountability, and limits of automated assurance.

**Evidence of mastery:** Present a deployment recommendation that separates observed evidence, inference, unresolved uncertainty, and required controls.

## Practical investigations

Progress through these projects in order:

1. **Neuron claim examination:** Take a published neuron example and separate its activation pattern from its measured output contribution.
2. **Toy feature investigation:** Use a small, safe model to inspect how a simple concept is represented. Compare a single-neuron account with a distributed-feature account.
3. **Intervention study:** Design an ablation or activation-patching experiment and explain what causal conclusion it can—and cannot—support.
4. **Safety detector evaluation:** Evaluate a benign harmful-text classifier using a labelled synthetic dataset. Report precision, recall, false positives, and false negatives.
5. **Fine-tuning audit:** Compare a base model and a benignly fine-tuned model for a specified behaviour. Test for regressions and hidden changes without attempting to elicit dangerous capabilities.
6. **Interpretability audit dossier:** Produce a reproducible report with hypothesis, model/version, dataset provenance, methods, controls, results, limitations, risk assessment, and reviewer checklist.

## Interdisciplinary connections

- **Psychology and cognitive science:** representations, memory, attention, decision processes, and limits of introspection.
- **Philosophy of science:** explanation, causality, falsifiability, evidence, and epistemic uncertainty.
- **Statistics and healthcare data analysis:** measurement validity, sensitivity, specificity, calibration, sampling bias, and reproducibility.
- **Political science and strategic studies:** threat modelling, incentives, institutional oversight, and the gap between declared intent and demonstrated capability.
- **Business and governance:** operational risk, accountability, auditability, and deployment decisions.
- **Supply chain and logistics:** provenance, dependency tracking, traceability, and failure propagation across complex systems.

## Applied project connections

These are integrated applications of the same discipline, not four separate courses. Use synthetic, public, or properly de-identified data. Never expose customer, patient, employee, financial, or other sensitive records to an external model without an approved lawful basis and explicit project controls.

### AI Engineering Learning Path
- Inspect a small, transparent model before relying on larger opaque systems.
- Compare behavioural evaluations with internal evidence; document where they agree and diverge.
- Build a reproducible evaluation harness with versioned prompts, datasets, model identifiers, baselines, controls, and regression tests.
- Evaluate safety interventions as hypotheses to test—not as guarantees.

### Cloud L
- Audit AI-assisted order classification, customer-support drafting, or menu recommendation for incorrect outputs, prompt injection, and unsafe escalation.
- Test whether the system follows explicit business rules under ambiguous, adversarial, and out-of-distribution inputs.
- Keep payment authorization, refunds, order state transitions, and other deterministic or consequential actions behind validated application logic and human approval where required.
- Use synthetic order/customer records in exercises; never use live customer messages as an unapproved training or evaluation corpus.

### Melat Supermarket
- Audit demand-forecasting, product categorization, and promotion recommendations for bias, drift, and unsupported confidence.
- Compare model predictions with simple baselines and actual sales outcomes; report stockout and overstock costs separately.
- Keep purchasing, pricing, and cash reconciliation under deterministic controls and owner approval. An AI recommendation is not an authorization to transact.
- Use synthetic or aggregated sales data unless access and privacy controls explicitly permit more.

### MMV Medical
- Audit administrative AI tools for hallucinated provider details, misleading claims, unsafe medical advice, and inappropriate disclosure.
- Test escalation to qualified staff when a request becomes clinical, urgent, ambiguous, or unsupported.
- Evaluate multilingual outputs for meaning preservation, not merely fluency.
- Use synthetic or properly de-identified cases. This discipline does not authorize automated diagnosis, treatment decisions, or patient-specific clinical promises.

### Home and portfolio systems
- Audit AI agents that plan, research, summarize, or operate workflows across projects.
- Test permission boundaries, tool selection, instruction hierarchy, data minimization, failure recovery, and evidence provenance.
- Verify that agents request approval before payments, purchases, publication, deletion, access changes, or other consequential actions.
- Maintain a versioned audit dossier and regression suite for each material AI workflow.

## Diagnostic questions

Use these as starting probes, not as a pass/fail quiz:

1. What is the difference between a neuron's activation and its causal contribution to an output?
2. Why might one neuron respond to multiple unrelated-looking inputs?
3. How can a concept be distributed across many neurons and still be interpretable?
4. What does an ablation experiment establish? What does it fail to establish?
5. Why is a probe's ability to decode information not proof that the model uses that information?
6. How would you test whether a safety fine-tune removed a capability rather than merely suppressing its ordinary expression?
7. What evidence would make you trust—or reject—a claim that a model has been made safe?

The diagnostic should identify prerequisite gaps and adapt the route. Do not assume the learner has mastered a topic because they can repeat its definition.

## Evaluation standard

Every practical investigation must include:
- A specific, falsifiable claim.
- A documented model and version, data source, and evaluation conditions.
- A baseline and appropriate controls.
- At least one negative or adversarial test.
- A record of failures and unexpected results.
- Clear separation of observations, interpretations, and causal claims.
- A limitations and residual-risk section.
- A reproducibility check by another person where feasible.

Do not use model-generated explanations of their own internals as ground truth. Prefer independently verifiable measurements, controlled interventions, and replication.

## Recommended resource sequence

1. Neural-network and transformer fundamentals.
2. Visual, hands-on introductions to activations, embeddings, attention, and residual streams.
3. Anthropic's 2026 neuron-basis interpretability research, Parts 1 and 2.
4. Practical mechanistic-interpretability notebooks and toy-model experiments.
5. Research on feature superposition, circuits, activation patching, and causal interventions.
6. AI safety evaluation, red-teaming methodology, and model-auditing case studies.

Choose resources based on the learner's diagnostic results. The sequence is a dependency map, not a requirement to consume every resource.

## Completion standard

The discipline is complete when the learner can independently design and critique a bounded interpretability investigation, evaluate a safety claim with appropriate controls, and communicate what the evidence does and does not establish. Completion is based on demonstrated reasoning, reproducibility, and transfer—not time spent or material consumed.
