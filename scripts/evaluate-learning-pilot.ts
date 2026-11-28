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

console.log(JSON.stringify({ mode: "synthetic", summary: summarizeLearningPilot(cases) }, null, 2));
