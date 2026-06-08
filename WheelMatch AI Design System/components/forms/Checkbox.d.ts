import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  checked?: boolean;
  tone?: 'primary' | 'success';
}

export function Checkbox(props: CheckboxProps): JSX.Element;
