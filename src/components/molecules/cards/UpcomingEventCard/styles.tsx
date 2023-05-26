import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const activeCardStyles = css`
  background: var(--c-white);
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%), 0 16px 24px rgb(0 0 0 / 10%);
  transition: all 0.5s var(--animation-bezier);
`;

export const StyledUpcomingEventCardContainer = styled(Link)`
  background: var(--c-aef-white);
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--size-1);
  width: 100%;
  text-decoration: none;
  border: 1px solid var(--c-grey-1);
  padding: var(--size-1h);
  box-shadow: 0 0 1px rgb(0 0 0 / 0%), 0 0 1px rgb(0 0 0 / 0%);
  cursor: pointer;
  transition: all 0.5s var(--animation-bezier);

  &:hover,
  &:focus {
    ${activeCardStyles}
  }

  &:hover svg,
  &:focus svg {
    color: var(--c-yellow-1);
  }

  @media screen and (width <= 768px) {
    flex-direction: column;
  }
`;

export const StyledPostCardImg = styled(GatsbyImage)`
  border-radius: var(--radius-md);
  width: 210px;
  height: 162px;
  @media screen and (width <= 768px) {
    width: 100%;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: var(--size-dual-nudge);
  margin: 0 auto;
`;
