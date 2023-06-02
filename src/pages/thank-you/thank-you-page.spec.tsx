import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThankYouPage from './index';

const mockData = {
  thankYouPage: {
    name: `Thank You`,
    headingOne: `Mock Heading`,
    subheading: `Mock Subheading`,
    thankYouTextBlock: [
      {
        _type: `block`,
        _key: `1`,
        children: [
          {
            _type: `span`,
            _key: `1`,
            text: `Mock Text`,
          },
        ],
      },
    ],
    pageImageBlock: {
      alt: `Mock Alt`,
      asset: {
        id: `mock-image-id`,
        gatsbyImageData: `Mock Image Data`,
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

describe(`ThankYouPage`, () => {
  beforeEach(() => {
    // @ts-ignore
    render(<ThankYouPage data={mockData} />);
  });

  it(`renders the ThankYouPage component`, () => {
    expect(screen.getByText(`Mock Heading`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Subheading`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Text`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Mock Alt`)).toBeInTheDocument();
  });
});
