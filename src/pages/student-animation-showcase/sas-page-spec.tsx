import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import StudentAnimationShowcasePage from './index';

const mockData = {
  sasPage: {
    name: `Student Animation Showcase`,
    headingOne: `Mock Heading 1`,
    subheading: `Mock Subheading`,
    headingOneButtonPath: `https://example.com`,
    headingOneButtonText: `Mock Button Text`,
    headingTwo: `Mock Heading 2`,
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
    sasTextBlock: [
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
    galleryManyBlock: [],
  },
};

describe(`StudentAnimationShowcasePage`, () => {
  beforeEach(() => {
    // @ts-ignore
    render(<StudentAnimationShowcasePage data={mockData} />);
  });

  it(`renders the StudentAnimationShowcasePage component`, () => {
    expect(screen.getByText(`Mock Heading 1`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Subheading`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Heading 2`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Text`)).toBeInTheDocument();
    expect(screen.getByAltText(`Mock Alt`)).toBeInTheDocument();
    expect(screen.getByText(`Mock Button Text`)).toBeInTheDocument();
  });
});
