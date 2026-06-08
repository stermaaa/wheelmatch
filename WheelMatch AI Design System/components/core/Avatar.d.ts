import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Availability indicator dot. */
  status?: 'available' | 'busy' | 'off';
}

export function Avatar(props: AvatarProps): JSX.Element;
