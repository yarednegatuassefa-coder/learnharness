import assert from "node:assert/strict";
import { test } from "node:test";
import { summarizeLearningPilot, type LearningPilotCase } from "../src/evaluation/learning-pilot.ts";

const cases: LearningPilotCase[] = [
  {
    id: "synthetic-prerequisite-repair",
    baseline: [{ correct: true, transferred: false }, { correct: false, transferred: false }],
    assisted: [{ correct: true, transferred: true, misconceptionRepaired: true }, { correct: true, transferred: true }],
    baselineLatencyMs: 800,
    assistedLatencyMs: 1_200,
    baselineCostUsd: 0,
    assistedCostUsd: 0.04,
  },
  {
    id: "synthetic-delayed-retrieval",
    baseline: [{ correct: true, transferred: false }, { correct: true, transferred: true }],
    assisted: [{ correct: true, transferred: true }, { correct: true, transferred: true, misconceptionRepaired: false }],
    baselineLatencyMs: 900,
    assistedLatencyMs: 1_400,
    baselineCostUsd: 0,
    assistedCostUsd: 0.06,
  },
];

test("pilot summary compares assisted learning with a baseline", () => {
  const result = summarizeLearningPilot(cases);
  assert.equal(result.caseCount, 2);
  assert.equal(result.baselineAccuracy, 0.75);
  assert.equal(result.assistedAccuracy, 1);
  assert.equal(result.accuracyDelta, 0.25);
  assert.equal(result.baselineTransfer, 0.25);
  assert.equal(result.assistedTransfer, 1);
  assert.equal(result.transferDelta, 0.75);
  assert.equal(result.assistedMisconceptionRepair, 0.25);
  assert.deepEqual(result.meanLatencyMs, { baseline: 850, assisted: 1300 });
  assert.deepEqual(result.meanCostUsd, { baseline: 0, assisted: 0.05 });
  assert.equal(result.costPerSuccessfulTransferUsd.assisted, 0.0125);
});

test("empty or malformed cases do not create fake success", () => {
  const result = summarizeLearningPilot([null as never, { id: "bad", baseline: [], assisted: [] } as LearningPilotCase]);
  assert.equal(result.caseCount, 1);
  assert.equal(result.baselineAccuracy, 0);
  assert.equal(result.assistedAccuracy, 0);
  assert.equal(result.assistedTransfer, 0);
});
