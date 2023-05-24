import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  disable?: boolean;
  action?: any;
  link?: string;
  theme?: string;
  className?: string;
  actionType?: string;
  type?: string;
  to?: string;
}
