import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const OutlineStyles = css`
  background: none;
  color: var(--dark-grey-4);

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: calc(var(--size-dual-nudge) - 2px) calc(var(--size-1h) - 2px);
  gap: var(--size-half);
  border: 2px solid var(--c-dark-grey-4);
  border-radius: var(--radius-sm);

  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-decoration: none;
  transition: transform 0.25s;

  &:hover {
    background: var(--c-yellow-1);
    border: none;
    padding: var(--size-dual-nudge) var(--size-1h);
    transform: scale(1.05);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18),
      0px 4px 14px rgba(0, 0, 0, 0.13);
  }
  &:focus {
    outline: 2px solid var(--c-browser-blue-1);
    border: none;
    padding: var(--size-dual-nudge) var(--size-1h);
  }
  &:active {
    background: var(--c-yellow-3);
    border: none;
    padding: var(--size-dual-nudge) var(--size-1h);
    outline: none;
    box-shadow: none;
  }
`;

export const StyledButtonOutline = styled.button`
  ${OutlineStyles}
`;

export const StyledLinkOutline = styled((props) => <Link {...props} />)`
  ${OutlineStyles}
`;

export const StyledAnchorOutline = styled.a`
  ${OutlineStyles}
`;
