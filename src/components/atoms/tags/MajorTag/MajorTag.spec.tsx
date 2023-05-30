// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// components
import MajorTag from './MajorTag';

describe(`MajorTag`, () => {
  it(`renders with the provided text and color`, () => {
    const props = {
      text: `Major Tag`,
      color: `blue`,
    };

    const { getByText } = render(<MajorTag {...props} />);

    const majorTag = getByText(`Major Tag`);

    expect(majorTag).toBeInTheDocument();
  });
});
