import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export const activeCardStyles = css`
  background: var(--c-white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2), 0 16px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.5s var(--animation-bezier);
`;

interface StyledPostCardContainerProps {
  $type?: string;
}

export const StyledPostCardContainer = styled(
  Link,
)<StyledPostCardContainerProps>`
  background: var(--c-aef-white);
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--size-1);
  width: 100%;
  text-decoration: none;
  border: 1px solid var(--c-grey-1);
  padding: ${(props) =>
    props.$type === `tomsBlog` ? `var(--size-1h)` : `var(--size-1)`};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0), 0 0 1px rgba(0, 0, 0, 0);
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

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

interface StyledPostCardImgProps {
  image: IGatsbyImageData;
}

export const StyledPostCardImg = styled(GatsbyImage)<StyledPostCardImgProps>`
  border-radius: var(--radius-md);
  width: 200px;
  height: 134px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

interface StyledFontAwesomeIconProps {
  icon: IconProp;
}

export const StyledFontAwesomeIcon = styled(
  FontAwesomeIcon,
)<StyledFontAwesomeIconProps>`
  color: var(--c-grey-3);
  font-size: var(--size-4);
  transition: all 0.5s var(--animation-bezier);
`;
