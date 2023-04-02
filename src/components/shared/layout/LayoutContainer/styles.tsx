import styled from 'styled-components';

type StyledLayoutContainerProps = {
  $gap: boolean;
};
export const StyledLayoutContainer = styled.div<StyledLayoutContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 0 var(--size-1);
  margin: 0 auto;
  gap: ${(props) => (props.$gap ? `var(--size-7)` : 0)};
`;
