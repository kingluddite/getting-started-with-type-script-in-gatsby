import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResourcesPage from './index';
import { describe, expect, it } from 'vitest';

// Mock the graphql query response
const mockData = {
  resourcesPage: {
    name: `Resources`,
    headingOne: `Resources Heading`,
    subheading: `Resources Subheading`,
    resourcesManyBlock: [
      {
        id: `1`,
        resourceType: `Type 1`,
        resourceBlockHeading: `Resource 1`,
        resourceDescription: `Description 1`,
        resourceImg: {
          alt: `Image 1`,
          asset: {
            gatsbyImageData: `image1.jpg`,
          },
        },
        callToActionLink: `/resource1`,
      },
      // Add more resource objects as needed for testing
    ],
    // Add more properties as needed for testing
  },
};

describe(`ResourcesPage`, () => {
  it(`renders the page with correct heading and subheading`, () => {
    render(<ResourcesPage data={mockData as any} />);

    const heading = screen.getByRole(`heading`, { name: `Resources Heading` });
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByText(`Resources Subheading`);
    expect(subheading).toBeInTheDocument();
  });

  it(`displays the resources cards`, () => {
    render(<ResourcesPage data={mockData as any} />);

    const resource1 = screen.getByText(`Resource 1`);
    expect(resource1).toBeInTheDocument();

    // Add more assertions for other resource cards
  });

  it(`filters resources when searching by title`, () => {
    render(<ResourcesPage data={mockData as any} />);

    const searchInput = screen.getByRole(`searchbox`);
    fireEvent.change(searchInput, { target: { value: `Resource 1` } });

    const resource1 = screen.getByText(`Resource 1`);
    expect(resource1).toBeInTheDocument();

    // Assert that other resources are not displayed

    fireEvent.change(searchInput, { target: { value: `` } });

    // Assert that all resources are displayed again
  });

  // Add more tests as needed for other functionality or components
});
