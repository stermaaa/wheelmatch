import * as React from 'react';

export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  unit?: string;
  icon?: React.ReactNode;
  /** Trend text, e.g. "+12%". */
  trend?: string;
  trendDir?: 'up' | 'down';
  accent?: 'primary' | 'ai' | 'success' | 'warning' | 'info' | 'neutral';
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
