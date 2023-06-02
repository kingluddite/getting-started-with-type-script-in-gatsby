// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// component to test
import CardGridContainer from './styles';

describe(`CardGridContainer`, () => {
  it(`renders the component with children`, () => {
    // Arrange
    const props = {
      minMaxVal: 320,
      children: <div>Card 1</div>,
    };

    // Act
    const { getByText } = render(<CardGridContainer {...props} />);
    const cardElement = getByText(`Card 1`);

    // Assert
    expect(cardElement).toBeInTheDocument();
  });

  it(`renders the component with default minMaxVal`, () => {
    // Arrange
    const props = {
      children: <div>Card 2</div>,
    };

    // Act
    const { getByText } = render(<CardGridContainer {...props} />);
    const cardElement = getByText(`Card 2`);

    // Assert
    expect(cardElement).toBeInTheDocument();
  });
});
