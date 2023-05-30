import React from 'react';
import { render, getByText } from '@testing-library/react';
import MetaContent from './MetaContent';
import { describe, it, expect } from 'vitest';

describe(`MetaContent`, () => {
  it(`renders the tag and date correctly`, () => {
    const tag = `News`;
    const date = new Date(`2023-05-27T08:30:00Z`);

    const { container } = render(<MetaContent tag={tag} date={date} />);
    const tagElement = getByText(container, `News`);
    const dateElement = getByText(container, `May 27, 2023`);

    expect(tagElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
