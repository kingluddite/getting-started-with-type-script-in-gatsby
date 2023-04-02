import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: var(--size-1);
`;

export const StyledButtonScrollToTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-white);
  color: var(--c-yellow-1);
  border: 1px solid var(--c-grey-1);
  width: var(--size-3);
  height: var(--size-3);
  margin: 0;
  padding: 0;
  border-radius: var(--radius-full);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  position: fixed;
  bottom: var(--size-3);
  right: var(--size-7);
  transform: scale(1);
  transition: transform 0.25s, bottom 0.25s var(--animation-bezier);

  &:hover {
    background: var(--c-aef-white);
    color: var(--c-yellow-2);
    border: 1px solid var(--c-grey-2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18),
      0px 4px 14px rgba(0, 0, 0, 0.13);
    transform: scale(0.95);
  }

  &:focus {
    outline: 1px solid var(--c-browser-blue-1);
  }

  &:active {
    background: var(--c-grey-1);
    color: var(--c-yellow-3);
    border: 1px solid var(--c-grey-3);
    outline: none;
  }

  @media only screen and (max-width: 1200px) {
    bottom: var(--size-1);
    right: var(--size-1);
  }
`;
