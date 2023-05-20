// npm
import React from 'react';

// styles
import styled from 'styled-components';

// types
import { CardGridContainerProps, StyledCardGridProps } from './types';

const StyledCardGrid = styled.div<StyledCardGridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      ${(props) => (props.$minMaxVal ? `${props.$minMaxVal}px` : `280px`)},
      1fr
    )
  );
  gap: var(--size-1);
  justify-items: center;
  width: 100%;
`;

export default function CardGridContainer({
  minMaxVal,
  children,
  ...props
}: CardGridContainerProps) {
  return (
    <StyledCardGrid $minMaxVal={minMaxVal} {...props}>
      {children}
    </StyledCardGrid>
  );
}
