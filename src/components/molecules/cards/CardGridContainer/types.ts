import { ReactNode } from 'react';

export interface StyledCardGridProps {
  $minMaxVal?: number;
}

export interface CardGridContainerProps {
  minMaxVal?: number;
  className?: string;
  children?: ReactNode;
}
