import styled from 'styled-components';

export const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-grey-3);
  margin: 2rem 0;
  border-radius: 5px;
  text-align: center;

  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--c-grey-3);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--c-yellow-1);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--c-grey-1);
    }
  }
`;
