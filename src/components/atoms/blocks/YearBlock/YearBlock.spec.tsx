// npm
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Component
import YearBlock from './YearBlock';

// Test
describe(`YearBlock`, () => {
  it(`renders year and text correctly`, () => {
    const year = 2021;
    const text = `Lorem ipsum dolor sit amet`;

    const { getByText } = render(<YearBlock year={year} text={text} />);

    expect(getByText(year)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });

  it(`renders year and children correctly`, () => {
    const year = 2022;
    const children = <span>Child Component</span>;

    const { getByText } = render(<YearBlock year={year}>{children}</YearBlock>);

    expect(getByText(year)).toBeInTheDocument();
    expect(getByText(`Child Component`)).toBeInTheDocument();
  });
});
