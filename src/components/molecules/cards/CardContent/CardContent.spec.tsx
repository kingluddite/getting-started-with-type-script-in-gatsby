// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// component to test
import CardContent from './CardContent';

describe(`CardContent`, () => {
  it(`renders the component with card content`, () => {
    // Arrange
    const props = {
      cardType: `resource`,
      actionType: `link`,
      tagText: `Tag Text`,
      title: `Card Title`,
      description: `Card Description`,
      charLimitTitle: 10,
      charLimitDesc: 20,
    };

    // Act
    const { getByText, getByTitle } = render(<CardContent {...props} />);
    const tagElement = getByText(`Tag Text`);
    const titleElement = getByTitle(`Card Title`);
    const descriptionElement = getByTitle(`Card Description`);
    const buttonElement = getByText(`View resource`);

    // Assert
    expect(tagElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it(`renders the component without description`, () => {
    // Arrange
    const props = {
      cardType: `upcomingEvent`,
      actionType: `anchor`,
      tagText: `Tag Text`,
      title: `Card Title`,
      charLimitTitle: 10,
      charLimitDesc: 1,
    };

    // Act
    const { getByText, queryByText } = render(<CardContent {...props} />);
    const tagElement = getByText(`Tag Text`);
    const titleElement = getByText(`Card Title`);
    const descriptionElement = queryByText(`Card Description`);
    const buttonElement = getByText(`Learn more`);

    // Assert
    expect(tagElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeNull();
    expect(buttonElement).toBeInTheDocument();
  });
});
