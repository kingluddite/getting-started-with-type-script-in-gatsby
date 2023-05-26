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

    display: box; /* Not needed if autoprefixing */
    display: flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: calc(-1 * var(--masonry-gutter)); /* gutter size offset */
    width: auto;
  }

  /* stylelint-disable */
  .masonry_column {
    padding-left: var(--masonry-gutter); /* gutter size */
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    gap: var(--masonry-gutter);
  }
  /* stylelint-enable */
  @media (prefers-reduced-motion: no-preference) {
    .gatsby-image-wrapper {
      transition: transform 0.3s var(--animation-bezier);
    }
  }

  .gatsby-image-wrapper:hover,
  .gatsby-image-wrapper:focus {
    transform: scale(1.1) !important;
    box-shadow: 0 2px 10px rgb(0 0 0 / 50%), 0 16px 24px rgb(0 0 0 / 30%);
    z-index: 5;
  }
`;
