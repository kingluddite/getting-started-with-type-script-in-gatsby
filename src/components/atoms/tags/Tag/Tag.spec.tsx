// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// components
import Tag from './Tag';

describe(`Tag`, () => {
  it(`renders MinorTag for type "minor"`, () => {
    const props = {
      type: `minor` as 'minor',
      text: `Minor Tag`,
    };

    const { getByText } = render(<Tag {...props} />);

    const minorTag = getByText(`Minor Tag`);

    expect(minorTag).toBeInTheDocument();
  });

  it(`renders MajorTag for type "primary" by default`, () => {
    const props = {
      text: `Major Tag`,
      type: `primary` as 'primary',
      color: `blue`,
    };

    const { getByText } = render(<Tag {...props} />);

    const majorTag = getByText(`Major Tag`);

    expect(majorTag).toBeInTheDocument();
  });
});
