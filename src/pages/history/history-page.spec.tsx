// npm
import React from 'react';
import { render, screen } from '@testing-library/react';
// import { graphql } from 'gatsby';
import HistoryPage from './index';
import { describe, it, expect, beforeEach } from 'vitest';

// Mock the GraphQL query
// jest.mock(`gatsby`, () => ({
//   graphql: jest.fn(),
// }));

describe(`HistoryPage`, () => {
  const data = {
    historyPage: {
      name: `History`,
      headingOne: `Mock Heading`,
      subheading: `Mock Subheading`,
      quoteManyBlock: [
        {
          id: `1`,
          quoteContent: `Mock quote content`,
          quoteAuthor: `Mock quote author`,
        },
      ],
      timelineTextBlock: [
        {
          _key: `block1`,
          _type: `block`,
          children: [
            {
              _key: `block1children`,
              _type: `span`,
              marks: [],
              text: `Mock timeline text`,
            },
          ],
          markDefs: [],
          style: `normal`,
        },
      ],
      timelineManyBlock: [
        {
          id: `1`,
          yearOfEvent: 2020,
          eventDescription: `Mock event description`,
        },
      ],
      pageImageBlock: {
        alt: `Mock Image Alt`,
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
  };

  beforeEach(() => {
    // Mock the GraphQL query response
    // graphql.mockResolvedValueOnce({ data });

    render(<HistoryPage data={data as any} />);
  });

  it(`should render the heading`, () => {
    expect(screen.getByText(`Mock Heading`)).toBeInTheDocument();
  });

  it(`should render the subheading`, () => {
    expect(screen.getByText(`Mock Subheading`)).toBeInTheDocument();
  });

  it(`should render the quote content`, () => {
    expect(screen.getByText(`Mock quote content`)).toBeInTheDocument();
  });

  // it(`should render the quote author`, () => {
  //   expect(screen.getByText(`Mock quote author`)).toBeInTheDocument();
  // });

  it(`should render the timeline text`, () => {
    expect(screen.getByText(`Mock timeline text`)).toBeInTheDocument();
  });

  it(`should render the event year`, () => {
    expect(screen.getByText(`2020`)).toBeInTheDocument();
  });

  it(`should render the event description`, () => {
    expect(screen.getByText(`Mock event description`)).toBeInTheDocument();
  });

  // it(`should render the page image`, () => {
  //   expect(screen.getByAltText(`Mock Image Alt`)).toBeInTheDocument();
  // });
});

// describe(`Head`, () => {
//   it(`should render SEO title`, () => {
//     const data = {
//       historyPage: {
//         name: `History`,
//       },
//     };

//     const { container } = render(<Head data={data} />);
//     expect(container.querySelector(`title`).textContent).toBe(`History`);
//   });
// });
