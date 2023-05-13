// npm
import React from 'react';

// styles
import { StyledLayoutContainer } from './styles';

// types
import { LayoutProps } from './types';

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
