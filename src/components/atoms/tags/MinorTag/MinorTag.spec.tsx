// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// components
import MinorTag from './MinorTag';

describe(`MinorTag`, () => {
  it(`renders with the provided text`, () => {
    const props = {
      text: `Minor Tag`,
    };

    const { getByText } = render(<MinorTag {...props} />);

    const minorTag = getByText(`Minor Tag`);

    expect(minorTag).toBeInTheDocument();
  });
});
