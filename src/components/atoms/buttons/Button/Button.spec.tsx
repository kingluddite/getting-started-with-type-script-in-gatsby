import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './index';

describe(`Button`, () => {
  it(`renders correctly with outline theme`, () => {
    const { getByText } = render(
      <Button theme="outline">Outline Button</Button>,
    );
    expect(getByText(`Outline Button`)).toBeInTheDocument();
  });

  it(`renders correctly with minor theme`, () => {
    const { getByText } = render(<Button theme="minor">Minor Button</Button>);
    expect(getByText(`Minor Button`)).toBeInTheDocument();
  });

  it(`renders correctly with primary theme (default)`, () => {
    const { getByText } = render(
      <Button theme="primary">Primary Button</Button>,
    );
    expect(getByText(`Primary Button`)).toBeInTheDocument();
  });

  it(`renders correctly with solid theme`, () => {
    const { getByText } = render(<Button theme="solid">Solid Button</Button>);
    expect(getByText(`Solid Button`)).toBeInTheDocument();
  });
});
