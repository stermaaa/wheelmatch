import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (also the tooltip). */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'secondary' | 'subtle';
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
