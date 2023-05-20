import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: var(--size-1);
  transition: transform 0.3s var(--animation-bezier);
`;

export const StyledFontAwesomeIconRotated = styled(FontAwesomeIcon)`
  font-size: var(--size-1);
  transform: rotate(315deg);
  transition: transform 0.3s var(--animation-bezier);
`;

export const MinorStyles = css`
  background: none;
  color: var(--dark-grey-4);

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: var(--size-half);

  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-decoration: none;
  border: none;

  & > span {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: var(--size-half);
    margin: 0;
    padding: 0;
  }

  &:hover {
    color: var(--c-yellow-2);
  }
  &:hover > span {
    text-decoration: underline;
  }
  &:hover .minor-icon-right {
    transform: translateX(var(--size-nudge));
  }
  &:hover .minor-icon-up-right {
    transform: translate(var(--size-nudge), calc(-1 * var(--size-nudge)))
      rotate(315deg);
  }
  &:focus {
    outline: 1px solid var(--c-browser-blue-1);
  }
  &:active {
    color: var(--c-yellow-3);
    text-decoration: none;
    outline: none;
  }
  &:active > span {
    text-decoration: none;
  }
`;

export const StyledButtonMinor = styled.button`
  ${MinorStyles}
`;

export const StyledLinkMinor = styled((props) => <Link {...props} />)`
  ${MinorStyles}
`;

export const StyledAnchorMinor = styled.a`
  ${MinorStyles}
`;
