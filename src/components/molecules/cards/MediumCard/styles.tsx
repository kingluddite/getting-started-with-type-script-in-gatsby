// npm
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const activeCardStyles = css`
  background: var(--c-white);
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%), 0 16px 24px rgb(0 0 0 / 10%);
  transition: all 0.5s var(--animation-bezier);
`;

export const cardContainerStyles = css`
  display: flex;
  box-sizing: border-box;
  justify-content: stretch;
  flex-direction: column;
  background: var(--c-aef-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 350px;
  max-width: 282px;
  text-decoration: none;
  border: 1px solid var(--c-grey-1);
  box-shadow: 0 0 1px rgb(0 0 0 / 0%), 0 0 1px rgb(0 0 0 / 0%);
  transition: all 0.5s var(--animation-bezier);
`;

export const StyledCardLinkContainer = styled(Link)`
  ${cardContainerStyles}

  &:hover,
  &:focus {
    ${activeCardStyles}
  }
`;

export const StyledCardAnchorContainer = styled.a`
  ${cardContainerStyles}
  &:hover,
  &:focus {
    ${activeCardStyles}
  }
`;

export const StyledImageContainer = styled.div`
  width: 282px;
  height: 134px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
`;
