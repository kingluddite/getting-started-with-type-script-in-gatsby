/* eslint-disable react/jsx-props-no-spreading */
// npm
import React, { ReactNode } from 'react';

// styles
import { StyledLayoutContainer } from './styles';

interface LayoutProps {
  hasSectionGaps?: boolean;
  children: ReactNode;
  className?: string;
  style?: any;
  $gap?: any;
}

function LayoutContainer({
  hasSectionGaps,
  // className,
  children,
  ...props
}: LayoutProps) {
  return (
    <StyledLayoutContainer $gap={hasSectionGaps} {...props}>
      {children}
    </StyledLayoutContainer>
  );
}

export default LayoutContainer;
