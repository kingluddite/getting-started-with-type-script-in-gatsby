import React from 'react';
import { render } from '@testing-library/react';
import MinorButton from './MinorButton';
import { describe, expect, it } from 'vitest';

describe(`MinorButton`, () => {
  it(`renders link-based button correctly`, () => {
    const { getByText } = render(
      <MinorButton actionType="link" link="/about">
        Link Button
      </MinorButton>,
    );
    expect(getByText(`Link Button`)).toBeInTheDocument();
  });

  it(`renders anchor-based button correctly`, () => {
    const { getByText } = render(
      <MinorButton actionType="anchor" link="https://example.com">
        Anchor Button
      </MinorButton>,
    );
    expect(getByText(`Anchor Button`)).toBeInTheDocument();
  });

  it(`renders button-based button correctly`, () => {
    const { getByText } = render(
      <MinorButton actionType="button">Button Button</MinorButton>,
    );
    expect(getByText(`Button Button`)).toBeInTheDocument();
  });

  it(`renders link-based button with disabled state`, () => {
    const { getByText } = render(
      <MinorButton actionType="link" link="/contact" disable>
        Disabled Link Button
      </MinorButton>,
    );
    expect(getByText(`Disabled Link Button`)).toBeInTheDocument();
  });
});
