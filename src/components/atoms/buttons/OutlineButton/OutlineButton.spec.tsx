import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import OutlineButton from './OutlineButton';

describe(`OutlineButton`, () => {
  it(`renders link-based button correctly`, () => {
    const { getByText } = render(
      <OutlineButton action={() => {}} actionType="link" link="/about">
        Link Button
      </OutlineButton>,
    );
    expect(getByText(`Link Button`)).toBeInTheDocument();
  });

  it(`renders anchor-based button correctly`, () => {
    const { getByText } = render(
      <OutlineButton
        action={() => {}}
        actionType="anchor"
        link="https://example.com"
      >
        Anchor Button
      </OutlineButton>,
    );
    expect(getByText(`Anchor Button`)).toBeInTheDocument();
  });

  it(`renders button-based button correctly`, () => {
    const { getByText } = render(
      <OutlineButton action={() => {}} actionType="button">
        Button Button
      </OutlineButton>,
    );
    expect(getByText(`Button Button`)).toBeInTheDocument();
  });
});
