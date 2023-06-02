// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// component to test
import MediumCard from './MediumCard';

describe(`MediumCard`, () => {
  it(`renders the home card with anchor action`, () => {
    // Arrange
    const data = {
      cardType: `home`,
      actionType: `anchor`,
      href: `https://example.com`,
      tagText: `Mock Tag`,
      title: `Mock Title`,
      description: `Mock Description`,
      image: null,
    };

    // Act
    const { getByText } = render(<MediumCard {...data} />);
    const tagElement = getByText(`Mock Tag`);
    const titleElement = getByText(`Mock Title`);
    const descriptionElement = getByText(`Mock Description`);
    // const imageContainer = getByTestId(`image-container`);

    // Assert
    expect(tagElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    // expect(imageContainer).toBeInTheDocument();
  });

  it(`renders the home card with link action`, () => {
    // Arrange
    const data = {
      cardType: `home`,
      actionType: `link`,
      to: `/example`,
      tagText: `Mock Tag`,
      title: `Mock Title`,
      description: `Mock Description`,
      image: null,
    };

    // Act
    // add getByTestId
    const { getByText } = render(<MediumCard {...data} />);
    const tagElement = getByText(`Mock Tag`);
    const titleElement = getByText(`Mock Title`);
    const descriptionElement = getByText(`Mock Description`);
    // const imageContainer = getByTestId(`image-container`);

    // Assert
    expect(tagElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    // expect(imageContainer).toBeInTheDocument();
  });

  it(`renders the resource card`, () => {
    // Arrange
    const data = {
      cardType: `resource`,
      actionType: `anchor`,
      href: `https://example.com`,
      title: `Mock Title`,
      description: `Mock Description`,
      image: null,
    };

    // Act
    const { getByText } = render(<MediumCard {...data} />);
    const titleElement = getByText(`Mock Title`);
    const descriptionElement = getByText(`Mock Description`);
    // const imageContainer = getByTestId(`image-container`);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    // expect(imageContainer).toBeInTheDocument();
  });

  it(`renders the past event card`, () => {
    // Arrange
    const data = {
      cardType: `pastEvent`,
      actionType: `link`,
      to: `/example`,
      tagText: `Mock Tag`,
      title: `Mock Title`,
      description: `Mock Description`,
      image: null,
    };

    // Act
    const { getByText, queryByTestId } = render(<MediumCard {...data} />);
    const tagElement = getByText(`Mock Tag`);
    const titleElement = getByText(`Mock Title`);
    const descriptionElement = getByText(`Mock Description`);
    const imageContainer = queryByTestId(`image-container`);

    // Assert
    expect(tagElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageContainer).toBeNull();
  });
});
