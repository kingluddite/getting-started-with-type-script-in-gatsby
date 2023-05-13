import { ReactNode } from 'react';

export interface LayoutProps {
  hasSectionGaps?: boolean;
  children: ReactNode;
  className?: string;
  style?: any;
  $gap?: any;
}
