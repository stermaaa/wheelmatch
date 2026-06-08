import * as React from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
}

export interface TabsProps {
  tabs: Array<TabItem | string>;
  value: string;
  onChange?: (id: string) => void;
  variant?: 'underline' | 'segmented';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
