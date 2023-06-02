// npm
import React from 'react';
import { render, screen } from '@testing-library/react';
// import { graphql } from 'gatsby';
import GrantsPage from './index';
import { beforeEach, describe, expect, it } from 'vitest';

// Mock the GraphQL query
// jest.mock(`gatsby`, () => ({
//   graphql: jest.fn(),
// }));

describe(`GrantsPage`, () => {
  const data = {
    grantPage: {
      id: `1`,
      name: `Grants`,
      headingOne: `Heading One`,
      subheading: `Subheading`,
      grantImg: {
        alt: `Grant Image Alt`,
        asset: {
          gatsbyImageData: `<base64-encoded-image>`,
        },
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
      },
      grantTextBlock: [
        {
          _key: `block1`,
          _type: `block`,
          children: [
            {
              _key: `block1children`,
              _type: `span`,
              marks: [],
              text: `Grant Text`,
            },
          ],
          markDefs: [],
          style: `normal`,
        },
      ],
      grantAwardBlock: {
        grantAwardBlockHeading: `Grant Award Heading`,
        grantAwardTextBlock: [
          {
            _key: `block2`,
            _type: `block`,
            children: [
              {
                _key: `block2children`,
                _type: `span`,
                marks: [],
                text: `Grant Award Text`,
              },
            ],
            markDefs: [],
            style: `normal`,
          },
        ],
        callToAction: `Call To Action`,
        callToActionLink: `/call-to-action`,
        grantAwardImageBlock: {
          alt: `Grant Award Image Alt`,
          asset: {
            gatsbyImageData: `<base64-encoded-image>`,
          },
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
        },
      },
      grantEligibilityBlock: {
        grantEligibilityBlockHeading: `Grant Eligibility Heading`,
        grantEligibilityTextBlock: [
          {
            _key: `block3`,
            _type: `block`,
            children: [
              {
                _key: `block3children`,
                _type: `span`,
                marks: [],
                text: `Grant Eligibility Text`,
              },
            ],
            markDefs: [],
            style: `normal`,
          },
        ],
        callToAction: `Call To Action`,
        callToActionLink: `/call-to-action`,
        grantEligibilityImageBlock: {
          alt: `Grant Eligibility Image Alt`,
          asset: {
            gatsbyImageData: `<base64-encoded-image>`,
          },
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
        },
      },
      hasGallery: false,
      galleryManyBlock: [],
    },
  };

  beforeEach(() => {
    // Mock the GraphQL query response
    // graphql.mockResolvedValueOnce({ data });

    render(<GrantsPage data={data as any} />);
  });

  it(`should render the heading`, () => {
    expect(screen.getByText(`Heading One`)).toBeInTheDocument();
  });

  it(`should render the subheading`, () => {
    expect(screen.getByText(`Subheading`)).toBeInTheDocument();
  });

  it(`should render the grant text`, () => {
    expect(screen.getByText(`Grant Text`)).toBeInTheDocument();
  });

  it(`should render the grant award heading`, () => {
    expect(screen.getByText(`Grant Award Heading`)).toBeInTheDocument();
  });

  it(`should render the grant award text`, () => {
    expect(screen.getByText(`Grant Award Text`)).toBeInTheDocument();
  });

  // it(`should render the call to action`, () => {
  //   expect(screen.getByText(`Call To Action`)).toBeInTheDocument();
  // });

  it(`should render the grant eligibility heading`, () => {
    expect(screen.getByText(`Grant Eligibility Heading`)).toBeInTheDocument();
  });

  it(`should render the grant eligibility text`, () => {
    expect(screen.getByText(`Grant Eligibility Text`)).toBeInTheDocument();
  });

  // it(`should render the grant image`, () => {
  //   expect(screen.getByAltText(`Grant Image Alt`)).toBeInTheDocument();
  // });

  // it(`should render the grant award image`, () => {
  //   expect(screen.getByAltText(`Grant Award Image Alt`)).toBeInTheDocument();
  // });

  // it(`should render the grant eligibility image`, () => {
  //   expect(
  //     screen.getByAltText(`Grant Eligibility Image Alt`),
  //   ).toBeInTheDocument();
  // });

  // it(`should render the call to action link`, () => {
  //   expect(
  //     screen.getByRole(`link`, { name: `Call To Action` }),
  //   ).toBeInTheDocument();
  // });
});

// describe(`Head`, () => {
//   it(`should render SEO title`, () => {
//     const data = {
//       grantPage: {
//         name: `Grants`,
//       },
//     };

//     // @ts-ignore
//     const { container } = render(<Head data={data} />);
//     // expect(container.querySelector(`title`).textContent).toBe(`Grants`);
//   });
// });
