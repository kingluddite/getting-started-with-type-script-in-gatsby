import styled, { css } from 'styled-components';

export const MinorStyles = css`
  background: none;
  color: var(--c-yellow-1);

  padding: var(--size-nudge) var(--size-half);
  border: 1px solid var(--c-yellow-1);
  border-radius: var(--radius-xs);
  width: fit-content;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
`;

export const StyledTagMinor = styled.span`
  ${MinorStyles}
`;
