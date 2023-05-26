// npm
import styled, { css } from 'styled-components';

// types
import { StyledTagMajorProps } from './types';

export const MajorStyles = css<StyledTagMajorProps>`
  background: ${(props) =>
    props.$color === `grey` ? `var(--c-grey-1)` : `var(--c-yellow-1)`};
  color: ${(props) =>
    props.$color === `grey` ? `var(--c-dark-grey-4)` : `var(--c-dark-grey-2)`};
  padding: var(--size-nudge) var(--size-half);
  border-radius: var(--radius-xs);
  width: fit-content;
  font-family: Montserrat, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
`;

export const StyledTagMajor = styled.span<StyledTagMajorProps>`
  ${MajorStyles}
`;
