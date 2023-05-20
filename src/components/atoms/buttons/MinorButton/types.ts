import { ReactNode } from 'react';

export interface MinorButtonProps {
  action?: any;
  actionType?: string;
  children: ReactNode;
  disable?: boolean;
  link?: string;
  as?: any;
  className?: string;
  theme?: string;
}
