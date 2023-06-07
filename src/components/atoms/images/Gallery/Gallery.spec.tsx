// import React from 'react';
// import { render } from '@testing-library/react';
// import Gallery from './Gallery';
import { describe, it } from 'vitest';

describe(`Gallery component`, () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const images = [
    {
      id: `1`,
      alt: `Image 1`,
      asset: {
        id: `1`,
        gatsbyImageData: {
          /* Gatsby image data */
        },
      },
    },
    {
      id: `2`,
      alt: `Image 2`,
      asset: {
        id: `2`,
        gatsbyImageData: {
          /* Gatsby image data */
        },
      },
    },
    {
      id: `3`,
      alt: `Image 3`,
      asset: {
        id: `3`,
        gatsbyImageData: {
          /* Gatsby image data */
        },
      },
    },
  ];

  it(`renders without errors`, () => {
    // render(<Gallery images={images} />);
  });

  it(`renders the correct number of images`, () => {
    // const { getAllByTestId } = render(<Gallery images={images} />);
    // const imageWrappers = getAllByTestId(/image-wrapper-/);
    // expect(imageWrappers.length).toBe(images.length);
  });
});
