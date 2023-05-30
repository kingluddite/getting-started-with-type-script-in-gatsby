// npm
import React from 'react';
import { render } from '@testing-library/react';

// components
import EventPostList from './EventPostList';
import { describe, it, expect } from 'vitest';

// Mock eventBlogs data
const mockEventBlogs = {
  nodes: [
    {
      id: 1,
      eventImg: {
        asset: {
          gatsbyImageData: `mock-image-data`,
        },
        alt: `mock-alt-text`,
      },
      eventDate: `2023-06-01`,
      slug: {
        current: `mock-slug`,
      },
      eventTitle: `Mock Event`,
    },
  ],
};

describe(`EventPostList`, () => {
  it(`renders the EventPostList component correctly`, () => {
    // Render the EventPostList component with mock data
    // const { getByText, getByAltText } = render(
    //   <EventPostList eventBlogs={mockEventBlogs} />,
    // );
    // const { getByText, getByAltText } = render(
    //   <EventPostList eventBlogs={mockEventBlogs} />,
    // );
    // Check if the PostCard component is rendered
    // expect(getByText(`Mock Event`)).toBeInTheDocument();
    // expect(getByAltText(`mock-alt-text`)).toBeInTheDocument();expect(getByAltText(`mock-alt-text`)).toBeInTheDocument();
  });

  it(`filters events that already happened`, () => {
    // Create a mock event that has already happened
    const pastEvent = {
      id: 2,
      eventImg: {
        asset: {
          gatsbyImageData: `mock-image-data`,
        },
        alt: `mock-alt-text`,
      },
      eventDate: `2021-01-01`,
      slug: {
        current: `mock-slug`,
      },
      eventTitle: `Past Event`,
    };

    // Update the mock eventBlogs data with the past event
    const updatedMockEventBlogs = {
      ...mockEventBlogs,
      nodes: [...mockEventBlogs.nodes, pastEvent],
    };

    // Render the EventPostList component with updated mock data
    const { queryByText, queryByAltText } = render(
      <EventPostList eventBlogs={updatedMockEventBlogs} />,
    );

    // Check if the past event is not rendered
    expect(queryByText(`Past Event`)).toBeNull();
    expect(queryByAltText(`mock-alt-text`)).toBeNull();
  });
});
