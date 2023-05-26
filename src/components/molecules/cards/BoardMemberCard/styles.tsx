import styled from 'styled-components';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface StyledGatsbyImageProps extends Omit<GatsbyImageProps, 'image'> {}

export const StyledBoardCard = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border: 3px solid var(--c-grey-1);
  border-radius: var(--radius-lg);
  width: 1050px;
  max-width: 100%;

  @media only screen and (width <= 768px) {
    flex-flow: column;
  }
`;

export const StyledMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--size-1);
  border-right: 3px solid var(--c-grey-1);
  padding: var(--size-1h);
  @media only screen and (width <= 768px) {
    align-items: center;
    justify-content: inherit;
    border-bottom: 3px solid var(--c-grey-1);
    border-right: none;

    .default-image-center {
      margin: auto;
    }
  }
`;

export const StyledGatsbyImage = styled(GatsbyImage)<StyledGatsbyImageProps>`
  border-radius: var(--radius-full);
  @media only screen and (width <= 768px) {
    display: flex;
    align-content: center;
    width: 128px;
    margin: auto;
  }
`;

export const StyledMetaText = styled.div`
  margin-top: var(--size-1);

  h3 {
    margin-bottom: var(--size-half);
  }

  p {
    margin: 0;
    color: var(--c-grey-4);
    min-width: 200px;
  }

  @media only screen and (width <= 768px) {
    h3,
    p {
      text-align: center;
    }
  }
`;

export const StyledBioContainer = styled.div`
  padding: var(--size-1h);
  padding-bottom: var(--size-half);

  p {
    color: var(--c-dark-grey-1);
    overflow-wrap: break-word;
    width: 100%;
  }
`;
