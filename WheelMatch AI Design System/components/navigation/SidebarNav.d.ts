import * as React from 'react';

export interface NavItem {
  id?: string;
  label?: string;
  icon?: React.ReactNode;
  count?: number;
  /** Render a section overline instead of a link. */
  section?: string;
}

export interface SidebarNavProps {
  items: NavItem[];
  active?: string;
  onSelect?: (id: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SidebarNav(props: SidebarNavProps): JSX.Element;
