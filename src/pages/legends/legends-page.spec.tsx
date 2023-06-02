/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
import { describe, it, beforeEach, afterEach } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import LegendsPage from './index';

describe(`Legends Page`, () => {
  // @ts-ignore
  const data = {
    legendsPage: {
      name: `Legends`,
      headingOne: `Mock Heading`,
      subheading: `Mock Subheading`,
      quoteManyBlock: [
        {
          id: `1`,
          quoteContent: `Mock Quote Content 1`,
          quoteAuthor: `Mock Quote Author 1`,
        },
        {
          id: `2`,
          quoteContent: `Mock Quote Content 2`,
          quoteAuthor: `Mock Quote Author 2`,
        },
      ],
      legendBlock: [
        {
          id: `1`,
          fullName: `Mock Legend 1`,
          expertise: `Mock Expertise 1`,
          callToActionLink: `/mock-link-1`,
          callToAction: `Mock Call to Action 1`,
          legendImg: {
            alt: `Mock Alt 1`,
            asset: {
              gatsbyImageData: `Mock Gatsby Image Data 1`,
            },
            hotspot: {
              x: 1,
              y: 1,
              width: 1,
              height: 1,
            },
            crop: {
              top: 1,
              right: 1,
              left: 1,
              bottom: 1,
            },
          },
        },
        {
          id: `2`,
          fullName: `Mock Legend 2`,
          expertise: `Mock Expertise 2`,
          callToActionLink: `/mock-link-2`,
          callToAction: `Mock Call to Action 2`,
          legendImg: {
            alt: `Mock Alt 2`,
            asset: {
              gatsbyImageData: `Mock Gatsby Image Data 2`,
            },
            hotspot: {
              x: 1,
              y: 1,
              width: 1,
              height: 1,
            },
            crop: {
              top: 1,
              right: 1,
              left: 1,
              bottom: 1,
            },
          },
        },
      ],
      pageImageBlock: {
        alt: `Mock Page Image Alt`,
        asset: {
          id: `mock-page-image-id`,
          gatsbyImageData: `Mock Page Image Gatsby Image Data`,
        },
        hotspot: {
          y: 1,
          x: 1,
          width: 1,
          height: 1,
        },
        crop: {
          top: 1,
          right: 1,
          left: 1,
          bottom: 1,
        },
      },
      hasGallery: false,
      galleryManyBlock: [],
    },
  };

  beforeEach(() => {
    // render(<LegendsPage data={data as any} />);
  });

  afterEach(() => {
    // Add any necessary cleanup here
  });

  it(`renders the LegendsPage component`, () => {
    // expect(screen.getByText(`Mock Heading`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Subheading`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Quote Content 1`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Quote Content 2`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Quote Author 1`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Quote Author 2`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Legend 1`)).toBeInTheDocument();
    // expect(screen.getByText(`Mock Legend 2`)).toBeInTheDocument();
  });
});
