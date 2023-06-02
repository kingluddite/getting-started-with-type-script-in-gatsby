import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../Nav';
import { describe, expect, it } from 'vitest';

// jest.mock(`@svg/aef-full-lightmode-logo-lg-top-tag.svg`, () => `AEFLogoLight`); // Mock the AEFLogoLight SVG component

describe(`Nav`, () => {
  it(`renders without errors`, () => {
    // @ts-ignore
    render(<Nav location="/" menuOpen={false} setMenuOpen={() => {}} />);

    // Assert the presence of the AEF logo
    const logoLink = screen.getByRole(`link`, { name: /aef logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute(`href`, `/`);

    // Assert the presence of the DesktopNavContent component
    expect(screen.getByRole(`navigation`)).toBeInTheDocument();

    // Assert the presence of the MobileNavContent component
    // expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument();

    // Add more assertions based on your component's content and behavior
  });
});
