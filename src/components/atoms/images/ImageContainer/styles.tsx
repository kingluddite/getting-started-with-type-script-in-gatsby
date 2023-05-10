import styled from 'styled-components';

export const StyledFigure = styled.figure`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--size-1);
  border: 1px solid var(--c-grey-1);
  border-radius: var(--radius-sm);
  margin: 0;
  & > * {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2),
      0px 16px 24px rgba(0, 0, 0, 0.1);
  }
`;
