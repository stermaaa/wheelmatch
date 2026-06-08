import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  containerStyle?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
