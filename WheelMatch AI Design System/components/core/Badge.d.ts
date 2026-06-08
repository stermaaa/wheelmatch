import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'primary' | 'ai' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
  /** Filled style instead of soft tint. */
  solid?: boolean;
  children: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
