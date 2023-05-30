import { ReactNode } from 'react';

export interface OutlineButtonProps {
  action?: () => void;
  actionType: 'link' | 'internal' | 'anchor' | 'external' | 'button';
  children: ReactNode;
  link?: string;
}
