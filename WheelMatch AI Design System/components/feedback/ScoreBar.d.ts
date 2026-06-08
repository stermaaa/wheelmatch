import * as React from 'react';

export interface ScoreBarProps {
  label: string;
  /** 0–100. Auto-colors by threshold unless `color` given. */
  value: number;
  color?: string;
  showValue?: boolean;
  style?: React.CSSProperties;
}

export function ScoreBar(props: ScoreBarProps): JSX.Element;
