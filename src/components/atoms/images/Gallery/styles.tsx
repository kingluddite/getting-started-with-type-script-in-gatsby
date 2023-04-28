// npm
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
`;

export const StyledGallery = styled.section`
  max-width: 785px;
  .masonry {
    --masonry-gutter: var(--size-nudge);
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: calc(-1 * var(--masonry-gutter)); /* gutter size offset */
    width: auto;
  }

  .masonry_column {
    padding-left: var(--masonry-gutter); /* gutter size */
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    gap: var(--masonry-gutter);
  }

  .gatsby-image-wrapper {
    transition: transform 0.3s var(--animation-bezier);
  }

  .gatsby-image-wrapper:hover {
    transform: scale(1.1) !important;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5),
      0px 16px 24px rgba(0, 0, 0, 0.3);
    z-index: 5;
  }
`;
