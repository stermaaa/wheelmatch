import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  tone?: 'primary' | 'ai';
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
