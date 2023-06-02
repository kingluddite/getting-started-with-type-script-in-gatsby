import React from 'react';
import { render, screen } from '@testing-library/react';
import EventsPage from './index';
import { expect, it } from 'vitest';

it(`renders events page`, () => {
  // Mock the data that you expect to be passed to the EventsPage component
  const data = {
    eventsPage: {
      headingOne: `Upcoming Events`,
      subheading: `Check out our events`,
      pageImageBlock: {
        asset: {
          gatsbyImageData: null,
        },
        alt: `Page image`,
      },
    },
    eventBlogs: {
      totalCount: 2,
      nodes: [
        {
          id: `1`,
          eventTitle: `Event 1`,
          eventExcerpt: `Event 1 description`,
          eventDate: `2023-06-01`,
          slug: {
            current: `event-1`,
          },
          eventImg: {
            alt: `Event 1 image`,
            asset: {
              gatsbyImageData: null,
            },
            crop: {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            },
            hotspot: {
              y: 0,
              x: 0,
              width: 0,
              height: 0,
            },
          },
        },
        {
          id: `2`,
          eventTitle: `Event 2`,
          eventExcerpt: `Event 2 description`,
          eventDate: `2023-06-15`,
          slug: {
            current: `event-2`,
          },
          eventImg: {
            alt: `Event 2 image`,
            asset: {
              gatsbyImageData: null,
            },
            crop: {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            },
            hotspot: {
              y: 0,
              x: 0,
              width: 0,
              height: 0,
            },
          },
        },
      ],
    },
  };

  // @ts-ignore
  render(<EventsPage data={data} />);

  // Assert that the page content is rendered correctly
  // expect(screen.getByText(`Upcoming Events`)).toBeInTheDocument();
  expect(screen.getByText(`Check out our events`)).toBeInTheDocument();
  // expect(screen.getByAltText(`Page image`)).toBeInTheDocument();

  // Assert that the events are rendered correctly
  expect(screen.getByText(`Event 1`)).toBeInTheDocument();
  expect(screen.getByText(`Event 1 description`)).toBeInTheDocument();
  expect(screen.getByText(`Event 2`)).toBeInTheDocument();
  expect(screen.getByText(`Event 2 description`)).toBeInTheDocument();
});
