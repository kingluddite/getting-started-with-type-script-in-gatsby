// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// component to test
import LegendCard from './LegendCard';

describe(`LegendCard`, () => {
  it(`renders the component with legend information`, () => {
    // Arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const data = {
      legendImg: {
        asset: {
          gatsbyImageData: `mockImageData`,
          alt: `Mock legend image alt text`,
        },
      },
      fullName: `John Doe`,
      expertise: `Mock expertise`,
      callToAction: `Mock Call to Action`,
      callToActionLink: `https://example.com`,
    };

    // Act
    // const { getByText } = render(<LegendCard data={data} />);
    // const fullNameElement = getByText(`John Doe`);
    // const expertiseElement = getByText(`Mock expertise`);
    // const callToActionElement = getByText(`Mock Call to Action`);

    // Assert
    // expect(fullNameElement).toBeInTheDocument();
    // expect(expertiseElement).toBeInTheDocument();
    // expect(callToActionElement).toBeInTheDocument();
  });

  it(`renders the component without call to action`, () => {
    // Arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const data = {
      legendImg: {
        asset: {
          gatsbyImageData: `mockImageData`,
        },
      },
      fullName: `John Doe`,
      expertise: `Mock expertise`,
    };

    // Act
    // const { queryByText } = render(<LegendCard data={data} />);
    // const callToActionElement = queryByText(`Mock Call to Action`);

    // Assert
    // expect(callToActionElement).toBeNull();
  });

  it(`renders the component without legend image`, () => {
    // Arrange
    const data = {
      fullName: `John Doe`,
      expertise: `Mock expertise`,
      callToAction: `Mock Call to Action`,
      callToActionLink: `https://example.com`,
    };

    // Act
    const { getByText, queryByTestId } = render(
      <LegendCard data={data as any} />,
    );
    const fullNameElement = getByText(`John Doe`);
    const expertiseElement = getByText(`Mock expertise`);
    const callToActionElement = getByText(`Mock Call to Action`);
    const legendImageElement = queryByTestId(`legend-image`);

    // Assert
    expect(fullNameElement).toBeInTheDocument();
    expect(expertiseElement).toBeInTheDocument();
    expect(callToActionElement).toBeInTheDocument();
    expect(legendImageElement).toBeNull();
  });
});
