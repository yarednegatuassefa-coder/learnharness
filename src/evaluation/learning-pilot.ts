export type LearningAttempt = {
  correct: boolean;
  transferred?: boolean;
  misconceptionRepaired?: boolean;
};

export type LearningPilotCase = {
  id: string;
  baseline: LearningAttempt[];
  assisted: LearningAttempt[];
  baselineLatencyMs: number;
  assistedLatencyMs: number;
  baselineCostUsd: number;
  assistedCostUsd: number;
};

export type LearningPilotSummary = {
  caseCount: number;
  baselineAccuracy: number;
  assistedAccuracy: number;
  accuracyDelta: number;
  baselineTransfer: number;
  assistedTransfer: number;
  transferDelta: number;
  assistedMisconceptionRepair: number;
  meanLatencyMs: { baseline: number; assisted: number };
  meanCostUsd: { baseline: number; assisted: number };
  costPerSuccessfulTransferUsd: { baseline: number; assisted: number };
};

function ratio(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

function average(values: number[]): number {
  return ratio(values.reduce((sum, value) => sum + value, 0), values.length);
}

function accuracy(attempts: LearningAttempt[]): number {
  return ratio(attempts.filter((attempt) => attempt.correct).length, attempts.length);
}

function transfer(attempts: LearningAttempt[]): number {
  return ratio(attempts.filter((attempt) => attempt.transferred === true).length, attempts.length);
}

export function summarizeLearningPilot(cases: LearningPilotCase[]): LearningPilotSummary {
  const safeCases = cases.filter((item) => item && item.id && Array.isArray(item.baseline) && Array.isArray(item.assisted));
  const baselineAttempts = safeCases.flatMap((item) => item.baseline);
  const assistedAttempts = safeCases.flatMap((item) => item.assisted);
  const baselineTransfer = transfer(baselineAttempts);
  const assistedTransfer = transfer(assistedAttempts);
  const baselineCost = average(safeCases.map((item) => item.baselineCostUsd));
  const assistedCost = average(safeCases.map((item) => item.assistedCostUsd));
  return {
    caseCount: safeCases.length,
    baselineAccuracy: accuracy(baselineAttempts),
    assistedAccuracy: accuracy(assistedAttempts),
    accuracyDelta: accuracy(assistedAttempts) - accuracy(baselineAttempts),
    baselineTransfer,
    assistedTransfer,
    transferDelta: assistedTransfer - baselineTransfer,
    assistedMisconceptionRepair: ratio(assistedAttempts.filter((attempt) => attempt.misconceptionRepaired === true).length, assistedAttempts.length),
    meanLatencyMs: {
      baseline: average(safeCases.map((item) => item.baselineLatencyMs)),
      assisted: average(safeCases.map((item) => item.assistedLatencyMs)),
    },
    meanCostUsd: { baseline: baselineCost, assisted: assistedCost },
    costPerSuccessfulTransferUsd: {
      baseline: ratio(baselineCost, baselineAttempts.filter((attempt) => attempt.transferred === true).length),
      assisted: ratio(assistedCost, assistedAttempts.filter((attempt) => attempt.transferred === true).length),
    },
  };
}
