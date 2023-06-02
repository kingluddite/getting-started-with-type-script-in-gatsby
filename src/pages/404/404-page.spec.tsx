import React from 'react';
import { render, screen } from '@testing-library/react';
// import { graphql } from 'gatsby';
import NotFound from './index';
import { describe, expect, it } from 'vitest';

const dataMock = {
  notFoundPage: {
    name: `Not Found`,
    headingOne: `Sample Heading`,
    subheading: `Sample Subheading`,
    pageImageBlock: {
      alt: `Sample Image Alt`,
      asset: {
        id: `sampleImageId`,
        gatsbyImageData: `sampleImageData`,
      },
      hotspot: {
        y: 0,
        x: 0,
        width: 0,
        height: 0,
      },
      crop: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      },
    },
    notFoundTextBlock: [
      {
        _key: `sampleKey`,
        _type: `block`,
        children: [
          {
            _key: `sampleKey`,
            _type: `span`,
            marks: [],
            text: `Sample Text`,
          },
        ],
        markDefs: [],
        style: `normal`,
      },
    ],
    hasGallery: false,
    galleryManyBlock: [],
  },
};

describe(`NotFound`, () => {
  it(`renders without errors`, () => {
    // @ts-ignore
    render(<NotFound data={dataMock} />);

    expect(screen.getByText(`Sample Heading`)).toBeInTheDocument();
    expect(screen.getByText(`Sample Subheading`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample Image Alt`)).toBeInTheDocument();
    expect(screen.getByText(`Sample Text`)).toBeInTheDocument();
    // Add more assertions based on your component's content
  });
});

// describe(`Head`, () => {
//   it(`renders the SEO component with the correct title`, () => {
//     const dataMock = {
//       notFoundPage: {
//         name: `Not Found`,
//       },
//     };

//     render(<Head data={dataMock} />);

//     expect(document.title).toBe(`Not Found`);
//   });
// });

// describe(`query`, () => {
//   it(`is a valid GraphQL query`, () => {
//     expect(graphql`
//       ${query}
//     `).toBeTruthy();
//   });
// });
