import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const StyledLegendCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-1);
  border: 3px solid var(--c-grey-1);
  border-radius: var(--radius-lg);
  width: 250px;
  max-width: 100%;
  padding: var(--radius-lg);
  flex-grow: 1;
  text-align: center;
`;

export const StyledGatsbyImage = styled(GatsbyImage)<{
  image: IGatsbyImageData;
}>`
  border-radius: var(--radius-full);
`;

export const StyledMetaContainer = styled.div`
  h3 {
    margin-bottom: var(--size-half);
  }
  p {
    margin: 0;
  }
`;
