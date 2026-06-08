import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options: Array<SelectOption | string>;
  size?: 'sm' | 'md' | 'lg';
  containerStyle?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
