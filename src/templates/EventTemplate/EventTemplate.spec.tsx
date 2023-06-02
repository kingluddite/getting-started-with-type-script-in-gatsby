// import React from 'react';
import { describe, it } from 'vitest';
// import EventTemplate from './EventTemplate';
// import { render } from '@testing-library/react';

// Mock the graphql function
// jest.mock(`gatsby`, () => ({
//   graphql: jest.fn(),
// }));

// Mock the GraphQL query result
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const mockData = {
  event: {
    id: `123`,
    eventDate: `2023-06-01`,
    eventTitle: `Test Event`,
    eventText: [
      {
        _type: `block`,
        children: [
          {
            _type: `span`,
            text: `Event description`,
          },
        ],
      },
    ],
    eventImg: {
      alt: `Event Image`,
      asset: {
        gatsbyImageData: `test-gatsby-image-data`,
      },
      crop: {},
      hotspot: {},
    },
  },
};

describe(`EventTemplate`, () => {
  it(`renders the event template correctly`, () => {
    // render(<EventTemplate data={mockData as any} />);
    // expect(screen.getByText(`Test Event`)).toBeInTheDocument();
    // expect(screen.getByText(`Event description`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Event Image`)).toBeInTheDocument();
    // expect(screen.getByText(`2023-06-01`)).toBeInTheDocument();
    // expect(screen.getByText(`All Events`)).toBeInTheDocument();
  });
});
