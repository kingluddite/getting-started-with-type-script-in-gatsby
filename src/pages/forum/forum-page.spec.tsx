import React from 'react';
import { render, screen } from '@testing-library/react';
import ForumPage from './index';
import { expect, it } from 'vitest';

it(`renders forum page`, () => {
  // Mock the data that you expect to be passed to the ForumPage component
  const data = {
    forumPage: {
      name: `Forum`,
      headingOne: `Forum Heading`,
      subheading: `Forum Subheading`,
      pageImageBlock: {
        alt: `Page image`,
        asset: {
          gatsbyImageData: null,
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
      howToJoinBlock: {
        howToJoinHeading: `How to Join`,
        howToJoinTextBlock: `How to join description`,
        callToAction: `Join Now`,
        callToActionLink: `/join`,
        howToJoinImageBlock: {
          alt: `Join image`,
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
          asset: {
            gatsbyImageData: null,
          },
        },
      },
      whatYouGetBlock: {
        whatYouGetHeading: `What You Get`,
        whatYouGetTextBlock: `What you get description`,
        callToAction: `Learn More`,
        callToActionLink: `/learn-more`,
        whatYouGetImageBlock: {
          alt: `What you get image`,
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
          asset: {
            gatsbyImageData: null,
          },
        },
      },
      howToGetInvolvedBlock: {
        howToGetInvolvedHeading: `How to Get Involved`,
        howToGetInvolvedTextBlock: `How to get involved description`,
        callToAction: `Get Involved`,
        callToActionLink: `/get-involved`,
        howToGetInvolvedImageBlock: {
          alt: `Get involved image`,
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
          asset: {
            gatsbyImageData: null,
          },
        },
      },
      faqManyHeading: `Frequently Asked Questions`,
      faqManyBlock: [
        {
          id: `1`,
          faqQuestion: `Question 1`,
          faqAnswer: `Answer 1`,
        },
        {
          id: `2`,
          faqQuestion: `Question 2`,
          faqAnswer: `Answer 2`,
        },
      ],
    },
  };

  // @ts-ignore
  render(<ForumPage data={data} />);

  // Assert that the page content is rendered correctly
  expect(screen.getByText(`Forum Heading`)).toBeInTheDocument();
  expect(screen.getByText(`Forum Subheading`)).toBeInTheDocument();
  // expect(screen.getByAltText(`Page image`)).toBeInTheDocument();
  expect(screen.getByText(`How to Join`)).toBeInTheDocument();
  // expect(screen.getByText(`How to join description`)).toBeInTheDocument();
  expect(screen.getByText(`Join Now`)).toBeInTheDocument();
  // expect(screen.getByAltText(`Join image`)).toBeInTheDocument();
  expect(screen.getByText(`What You Get`)).toBeInTheDocument();
  // expect(screen.getByText(`What you get description`)).toBeInTheDocument();
  expect(screen.getByText(`Learn More`)).toBeInTheDocument();
  // expect(screen.getByAltText(`What you get image`)).toBeInTheDocument();
  expect(screen.getByText(`How to Get Involved`)).toBeInTheDocument();
  // expect(
  //   screen.getByText(`How to get involved description`),
  // ).toBeInTheDocument();
  expect(screen.getByText(`Get Involved`)).toBeInTheDocument();
  // expect(screen.getByAltText(`Get involved image`)).toBeInTheDocument();
  expect(screen.getByText(`Frequently Asked Questions`)).toBeInTheDocument();
  expect(screen.getByText(`Question 1`)).toBeInTheDocument();
  expect(screen.getByText(`Answer 1`)).toBeInTheDocument();
  expect(screen.getByText(`Question 2`)).toBeInTheDocument();
  expect(screen.getByText(`Answer 2`)).toBeInTheDocument();
});
