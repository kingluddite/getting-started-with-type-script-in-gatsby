// npm
import React from 'react';
import styled from 'styled-components';

interface StyledContentContainerProps {
  style?: React.CSSProperties;
}

export const StyledContentContainer = styled.div<StyledContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  justify-content: space-evenly;
  padding: var(--size-1h);
  border-top: 1px solid var(--c-grey-1);
  min-height: 216px;
`;

export const StyledMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-half);
  margin-bottom: var(--size-half);

  h3 {
    margin: var(--size-half) 0 0;
    color: var(--c-dark-grey-1);
    text-transform: capitalize;
  }

  p {
    margin: 0;
    margin: 0 0 2px;
    color: var(--c-grey-4);
  }
`;
