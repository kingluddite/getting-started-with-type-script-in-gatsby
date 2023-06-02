import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsPage from './index';
import { describe, expect, it } from 'vitest';

const dataMock = {
  newsPage: {
    name: `News`,
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
    hasGallery: false,
    galleryManyBlock: [],
  },
  allSanityNews: {
    totalCount: 2,
    nodes: [
      {
        id: `sampleId1`,
        _type: `sampleType1`,
        slug: {
          current: `sample-slug-1`,
        },
        newsPostTitle: `Sample Title 1`,
        newsContentExcerpt: `Sample Excerpt 1`,
        newsTag: `Sample Tag 1`,
        newsImg: {
          alt: `Sample Image Alt 1`,
          crop: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
          hotspot: {
            height: 0,
            width: 0,
            x: 0,
            y: 0,
          },
          asset: {
            gatsbyImageData: `sampleImageData1`,
          },
        },
        publishDate: `Sample Publish Date 1`,
      },
      {
        id: `sampleId2`,
        _type: `sampleType2`,
        slug: {
          current: `sample-slug-2`,
        },
        newsPostTitle: `Sample Title 2`,
        newsContentExcerpt: `Sample Excerpt 2`,
        newsTag: `Sample Tag 2`,
        newsImg: {
          alt: `Sample Image Alt 2`,
          crop: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
          hotspot: {
            height: 0,
            width: 0,
            x: 0,
            y: 0,
          },
          asset: {
            gatsbyImageData: `sampleImageData2`,
          },
        },
        publishDate: `Sample Publish Date 2`,
      },
    ],
  },
  searchableNews: {
    nodes: [],
  },
};

const pageContextMock = {
  currentPage: 1,
  skip: 0,
};

describe(`NewsPage`, () => {
  it(`renders without errors`, () => {
    // @ts-ignore
    render(<NewsPage data={dataMock} pageContext={pageContextMock} />);

    expect(screen.getByText(`Sample Heading`)).toBeInTheDocument();
    expect(screen.getByText(`Sample Subheading`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample Image Alt`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Search By Title`)).toBeInTheDocument();
    // expect(screen.getByText(`Sample Title 1`)).toBeInTheDocument();
    // expect(screen.getByText(`Sample Title 2`)).toBeInTheDocument();
    // Add more assertions based on your component's content
  });
});

// describe(`Head`, () => {
//   it(`renders the SEO component with the correct title`, () => {
//     const dataMock = {
//       newsPage: {
//         name: `News`,
//       },
//     };

//     render(<Head data={dataMock} />);

//     expect(document.title).toBe(`News`);
//   });
// });

// describe(`query`, () => {
//   it(`is a valid GraphQL query`, () => {
//     expect(graphql`
//       ${query}
//     `).toBeTruthy();
//   });
// });
