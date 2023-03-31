import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const PrimaryStyles = css`
  background: var(--c-yellow-1);
  color: var(--dark-grey-4);

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--size-dual-nudge) var(--size-1h);
  gap: var(--size-half);
  border: none;
  border-radius: var(--radius-sm);

  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-decoration: none;
  transition: transform 0.25s;

  &:hover {
    background: var(--c-yellow-2);
    transform: scale(1.05);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18),
      0px 4px 14px rgba(0, 0, 0, 0.13);
  }
  &:focus {
    outline: 2px solid var(--c-browser-blue-1);
  }
  &:active {
    background: var(--c-yellow-3);
    outline: none;
    box-shadow: none;
  }
`;

export const StyledButtonPrimary = styled.button`
  ${PrimaryStyles}
`;

export const StyledLinkPrimary = styled((props) => <Link {...props} />)`
  ${PrimaryStyles}
`;

export const StyledAnchorPrimary = styled.a`
  ${PrimaryStyles}
`;
