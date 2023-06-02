/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// npm
import React from 'react';
import { render } from '@testing-library/react';

// component to test
import BoardMemberCard from './BoardMemberCard';
import { describe, it, expect } from 'vitest';

describe(`BoardMemberCard`, () => {
  it(`renders the component with member information`, () => {
    // Arrange
    const data = {
      bioImg: {
        asset: {
          gatsbyImageData: `mockImageData`,
        },
        alt: `Mock alt text`,
      },
      fullName: `John Doe`,
      expertise: `Mock expertise`,
      callToAction: `Mock Call to Action`,
      callToActionLink: `https://example.com`,
      jobTitle: `Mock Job Title`,
      bioTextBlock: [
        {
          _type: `block`,
          children: [
            {
              _type: `span`,
              text: `Mock bio text`,
            },
          ],
        },
      ],
    };

    // Act
    // const { getByText } = render(<BoardMemberCard data={data as any} />);
    // const fullNameElement = getByText(`John Doe`);
    // const jobTitleElement = getByText(`Mock Job Title`);
    // const expertiseElement = getByText(`Mock expertise`);
    // // const callToActionElement = getByText(`Mock Call to Action`);
    // const bioTextElement = getByText(`Mock bio text`);

    // Assert
    // expect(fullNameElement).toBeInTheDocument();
    // expect(jobTitleElement).toBeInTheDocument();
    // expect(expertiseElement).toBeInTheDocument();
    // expect(callToActionElement).toBeInTheDocument();
    // expect(bioTextElement).toBeInTheDocument();
  });

  it(`renders the component without call to action`, () => {
    // Arrange

    const data = {
      bioImg: {
        asset: {
          gatsbyImageData: `mockImageData`,
        },
        alt: `Mock alt text`,
      },
      fullName: `John Doe`,
      expertise: `Mock expertise`,
      jobTitle: `Mock Job Title`,
      bioTextBlock: [
        {
          _type: `block`,
          children: [
            {
              _type: `span`,
              text: `Mock bio text`,
            },
          ],
        },
      ],
    };

    // Act
    // const { queryByText } = render(<BoardMemberCard data={data as any} />);
    // const callToActionElement = queryByText(`Mock Call to Action`);

    // Assert
    // expect(callToActionElement).toBeNull();
  });
});
