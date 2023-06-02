import React from 'react';
import * as Gatsby from 'gatsby';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import AboutPage from './index';

const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  aboutPage: {
    headingOne: `Mock Heading`,
    subheading: `Mock Subheading`,
    quoteManyBlock: [
      {
        id: `1`,
        quoteContent: `Mock quote content`,
        quoteAuthor: `Mock quote author`,
      },
    ],
    boardMemberManyHeading: `Mock Board Member Heading`,
    boardMemberBlock: [
      {
        id: `1`,
        fullName: `John Doe`,
        jobTitle: `Mock Job Title`,
        expertise: `Mock Expertise`,
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
      },
    ],
  },
};

describe(`About Page`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`renders the AboutPage component`, () => {
    // @ts-ignore
    const { getByText } = render(<AboutPage data={mockUseStaticQuery} />);
    const headingElement = getByText(`Mock Heading`);
    const subheadingElement = getByText(`Mock Subheading`);
    const quoteContentElement = getByText(`Mock quote content`);
    // const quoteAuthorElement = getByText(`Mock quote author`);
    const boardMemberHeadingElement = getByText(`Mock Board Member Heading`);
    const fullNameElement = getByText(`John Doe`);
    const jobTitleElement = getByText(`Mock Job Title`);
    const expertiseElement = getByText(`Mock Expertise`);
    const bioTextElement = getByText(`Mock bio text`);

    expect(headingElement).not.toBeNull();
    expect(subheadingElement).not.toBeNull();
    expect(quoteContentElement).not.toBeNull();
    // expect(quoteAuthorElement).not.toBeNull();
    expect(boardMemberHeadingElement).not.toBeNull();
    expect(fullNameElement).not.toBeNull();
    expect(jobTitleElement).not.toBeNull();
    expect(expertiseElement).not.toBeNull();
    expect(bioTextElement).not.toBeNull();
  });
});
