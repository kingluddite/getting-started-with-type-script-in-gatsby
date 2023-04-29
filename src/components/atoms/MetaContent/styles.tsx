import styled from 'styled-components';

export const StyledMetaContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: var(--size-half);

  time {
    color: var(--c-grey-4);
    font-size: var(--size-dual-nudge);
  }
`;
