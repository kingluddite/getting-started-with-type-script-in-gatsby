import { jsx as _jsx } from 'react/jsx-runtime';
import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Title from './Title';
describe(`Title`, () => {
  it(`renders a Title component`, () => {
    render(_jsx(Title, { children: `Test Title` }));
    expect(screen.getByText(`Test Title`)).toBeInTheDocument();
  });
});
