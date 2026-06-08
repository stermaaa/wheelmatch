import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover elevation + pointer cursor. */
  interactive?: boolean;
  /** Highlighted selected state (primary border). */
  selected?: boolean;
  children: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
