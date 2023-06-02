// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// component to test
import HeroHeading from './HeroHeading';

describe(`HeroHeading`, () => {
  it(`renders the heading without wings on non-homepage`, () => {
    // Arrange
    const { getByText, queryByTestId } = render(
      <HeroHeading home={false}>Test Heading</HeroHeading>,
    );

    // Act
    const headingContent = getByText(`Test Heading`);
    const wingLeft = queryByTestId(`wing-left`);
    const wingRight = queryByTestId(`wing-right`);

    // Assert
    expect(headingContent).toBeInTheDocument();
    expect(wingLeft).toBeNull();
    expect(wingRight).toBeNull();
  });

  it(`renders the heading with wings on homepage`, () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <HeroHeading home={true}>Test Heading</HeroHeading>,
    );

    // Act
    const headingContent = getByText(`Test Heading`);
    const wingLeft = getByTestId(`wing-left`);
    const wingRight = getByTestId(`wing-right`);

    // Assert
    expect(headingContent).toBeInTheDocument();
    expect(wingLeft).toBeInTheDocument();
    expect(wingRight).toBeInTheDocument();
  });
});
