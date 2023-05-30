import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import DefaultThumbnailImage from './DefaultThumbnailImage';

describe(`DefaultThumbnailImage`, () => {
  it(`renders with the correct attributes`, () => {
    const width = 200;
    const height = 150;
    const borderRadius = `50%`;
    const className = `custom-class`;

    const { getByAltText } = render(
      <DefaultThumbnailImage
        width={width}
        height={height}
        borderRadius={borderRadius}
        className={className}
      />,
    );

    const image = getByAltText(`AEF Logo`);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      `src`,
      `/src/assets/images/default-aef-thumbnail-logo.jpg`,
    );
    expect(image).toHaveAttribute(`width`, width.toString());
    expect(image).toHaveAttribute(`height`, height.toString());
    expect(image).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(image).toHaveClass(className);
  });
});
