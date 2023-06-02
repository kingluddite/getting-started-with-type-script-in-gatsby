// npm
import React from 'react';
import { render } from '@testing-library/react';

// component to test
import ContentBlock from './ContentBlock';
import { describe, it, expect } from 'vitest';

describe(`ContentBlock`, () => {
  it(`renders the component with heading and content`, () => {
    // Arrange
    const props = {
      heading: `Test Heading`,
      children: <p>Test Content</p>,
    };

    // Act
    const { getByText } = render(<ContentBlock {...props} />);
    const headingElement = getByText(`Test Heading`);
    const contentElement = getByText(`Test Content`);

    // Assert
    expect(headingElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it(`renders the component without heading`, () => {
    // Arrange
    const props = {
      children: <p>Test Content</p>,
    };

    // Act
    const { queryByText } = render(<ContentBlock {...props} />);
    const headingElement = queryByText(`Test Heading`);

    // Assert
    expect(headingElement).toBeNull();
  });

  it(`renders the component with call to action`, () => {
    // Arrange
    const props = {
      heading: `Test Heading`,
      children: <p>Test Content</p>,
      callToActionLink: `https://example.com`,
      callToActionTitle: `Call to Action`,
      showCallToAction: true,
    };

    // Act
    const { getByText } = render(<ContentBlock {...props} />);
    const ctaElement = getByText(`Call to Action`);

    // Assert
    expect(ctaElement).toBeInTheDocument();
  });

  it(`renders the component without call to action`, () => {
    // Arrange
    const props = {
      heading: `Test Heading`,
      children: <p>Test Content</p>,
      showCallToAction: false,
    };

    // Act
    const { queryByText } = render(<ContentBlock {...props} />);
    const ctaElement = queryByText(`Call to Action`);

    // Assert
    expect(ctaElement).toBeNull();
  });
});
