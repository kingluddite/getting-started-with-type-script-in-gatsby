import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import SolidButton from './SolidButton';

describe(`SolidButton`, () => {
  // Test case: Render a button as a Gatsby Link
  it(`renders a Gatsby Link when actionType is "link"`, () => {
    const link = `/example-link`;
    const { getByRole } = render(
      <SolidButton action={() => {}} actionType="link" link={link}>
        Link Button
      </SolidButton>,
    );
    const button = getByRole(`link`);
    expect(button).toHaveAttribute(`href`, link);
    expect(button).toHaveTextContent(`Link Button`);
  });

  // Test case: Render a button as an anchor tag for external links
  it(`renders an anchor tag for external links`, () => {
    const link = `https://example.com`;
    const { getByRole } = render(
      <SolidButton action={() => {}} actionType="external" link={link}>
        External Button
      </SolidButton>,
    );
    const button = getByRole(`link`);
    expect(button).toHaveAttribute(`href`, link);
    expect(button).toHaveAttribute(`target`, `_blank`);
    expect(button).toHaveAttribute(`rel`, `noreferrer noopener`);
    expect(button).toHaveTextContent(`External Button`);
  });

  // Test case: Render a regular button element
  it(`renders a regular button element when actionType is "button"`, () => {
    const { getByRole } = render(
      <SolidButton action={() => {}} actionType="button">
        Regular Button
      </SolidButton>,
    );
    const button = getByRole(`button`);
    expect(button).toHaveTextContent(`Regular Button`);
    fireEvent.click(button);
    // Add assertions for button click behavior if needed
  });

  // Add more test cases for other action types if necessary
});
