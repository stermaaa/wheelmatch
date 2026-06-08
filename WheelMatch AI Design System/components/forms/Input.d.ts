import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  containerStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
