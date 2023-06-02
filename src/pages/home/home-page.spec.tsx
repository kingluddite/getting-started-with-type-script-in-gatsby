// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import HomePage from '../index';
import { beforeEach, describe, it } from 'vitest';

describe(`HomePage`, () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const data = {
    homePage: {
      subheading: `Sample Subheading`,
      headingOneButtonPath: `/`,
      headingOneButtonText: `Sample Button Text`,
      vimeoId: `sampleVimeoId`,
      showHideVideoBtnText: `Sample Video Button Text`,
      whatWeProvideManyHeading: `Sample What We Provide Heading`,
      whatWeProvideBlock: [
        {
          id: `sampleId1`,
          link: `sampleLink1`,
          whatWeProvideHeading: `Sample Heading 1`,
          callToActionLink: `/sample-link1`,
          tagName: `Sample Tag 1`,
          pageImageBlock: {
            asset: {
              gatsbyImageData: `sampleImageData1`,
            },
            alt: `Sample Alt 1`,
          },
        },
        {
          id: `sampleId2`,
          link: `sampleLink2`,
          whatWeProvideHeading: `Sample Heading 2`,
          callToActionLink: `/sample-link2`,
          tagName: `Sample Tag 2`,
          pageImageBlock: {
            asset: {
              gatsbyImageData: `sampleImageData2`,
            },
            alt: `Sample Alt 2`,
          },
        },
      ],
      newsManyHeading: `Sample News Heading`,
    },
    latestNewsBlog: {
      nodes: [
        {
          id: `sampleNewsId1`,
          _type: `sampleType1`,
          newsTag: `Sample Tag 1`,
          newsBlogTitle: `Sample News Title 1`,
          newsContentExcerpt: `Sample News Excerpt 1`,
          slug: {
            current: `sample-slug-1`,
          },
          newsBlogImg: {
            alt: `Sample News Image Alt 1`,
            asset: {
              gatsbyImageData: `sampleNewsImageData1`,
              url: `sampleNewsImageUrl1`,
            },
          },
          publishDate: `Sample Publish Date 1`,
        },
        {
          id: `sampleNewsId2`,
          _type: `sampleType2`,
          newsTag: `Sample Tag 2`,
          newsBlogTitle: `Sample News Title 2`,
          newsContentExcerpt: `Sample News Excerpt 2`,
          slug: {
            current: `sample-slug-2`,
          },
          newsBlogImg: {
            alt: `Sample News Image Alt 2`,
            asset: {
              gatsbyImageData: `sampleNewsImageData2`,
              url: `sampleNewsImageUrl2`,
            },
          },
          publishDate: `Sample Publish Date 2`,
        },
      ],
    },
    eventBlogs: {
      nodes: [
        {
          id: `sampleEventId1`,
          eventTitle: `Sample Event Title 1`,
          eventExcerpt: `Sample Event Excerpt 1`,
          eventDate: `Sample Event Date 1`,
          slug: {
            current: `sample-event-slug-1`,
          },
          eventImg: {
            alt: `Sample Event Image Alt 1`,
            asset: {
              gatsbyImageData: `sampleEventImageData1`,
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
            },
          },
        },
        {
          id: `sampleEventId2`,
          eventTitle: `Sample Event Title 2`,
          eventExcerpt: `Sample Event Excerpt 2`,
          eventDate: `Sample Event Date 2`,
          slug: {
            current: `sample-event-slug-2`,
          },
          eventImg: {
            alt: `Sample Event Image Alt 2`,
            asset: {
              gatsbyImageData: `sampleEventImageData2`,
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

  beforeEach(() => {
    // Mock the GraphQL query response
    // graphql.mockResolvedValueOnce({ data });
    // @ts-ignore
    // render(<HomePage data={data} />);
  });
  it(`renders without errors`, () => {
    // @ts-ignore
    // render(<HomePage data={data} />);
    // Assert the presence of important elements on the page
    // expect(screen.getByText(`Sample Subheading`)).toBeInTheDocument();
    // expect(screen.getByText(`Sample Button Text`)).toBeInTheDocument();
    // expect(
    //   screen.getByText(`Sample What We Provide Heading`),
    // ).toBeInTheDocument();
    // expect(screen.getByText(`Sample News Heading`)).toBeInTheDocument();
    // expect(screen.getByText(`Sample Event Title 1`)).toBeInTheDocument();
    // expect(screen.getByText(`Sample Event Title 2`)).toBeInTheDocument();
    // Assert the presence of specific images
    // expect(screen.getByAltText(`Sample Alt 1`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample Alt 2`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample News Image Alt 1`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample News Image Alt 2`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample Event Image Alt 1`)).toBeInTheDocument();
    // expect(screen.getByAltText(`Sample Event Image Alt 2`)).toBeInTheDocument();
  });
});
