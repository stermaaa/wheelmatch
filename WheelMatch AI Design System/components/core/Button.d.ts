import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `ai` = violet for IA-generation actions. */
  variant?: 'primary' | 'ai' | 'secondary' | 'ghost' | 'subtle' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
