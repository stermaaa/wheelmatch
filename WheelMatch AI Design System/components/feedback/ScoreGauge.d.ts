import * as React from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Radial matching-score gauge" viewport="700x320"
 */
export interface ScoreGaugeProps {
  /** 0–100 matching score. Color thresholds: ≥80 green, ≥65 amber, else red. */
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  showValue?: boolean;
}

export function ScoreGauge(props: ScoreGaugeProps): JSX.Element;
