import * as React from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Anti-hallucination confidence badge" viewport="700x320"
 */
export interface ConfidenceBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** confirmed = sourced in CV · pending = to validate · absent = not mentioned. */
  state: 'confirmed' | 'pending' | 'absent';
  size?: 'sm' | 'md';
  /** Override the default French label. */
  children?: React.ReactNode;
}

export function ConfidenceBadge(props: ConfidenceBadgeProps): JSX.Element;
