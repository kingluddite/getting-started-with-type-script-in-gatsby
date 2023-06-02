import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { describe, expect, it } from 'vitest';

// jest.mock(`@svg/aef-lightmode-logo.svg`, () => `AEFLogoLight`); // Mock the AEFLogoLight SVG component

describe(`Footer`, () => {
  it(`renders without errors`, () => {
    render(<Footer />);

    // Assert the presence of the logo
    const logoLink = screen.getByRole(`link`, { name: /aef logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute(`href`, `/`);

    // Assert the presence of the copyright information
    // expect(screen.getByText(/copyright &copy;/i)).toBeInTheDocument();
    expect(screen.getByText(/animation educators forum/i)).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();

    // Assert the presence of the sitemap sections
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/engage/i)).toBeInTheDocument();
    expect(screen.getByText(/programs/i)).toBeInTheDocument();
    expect(screen.getByText(/connect/i)).toBeInTheDocument();

    // Add more assertions based on your component's content
  });
});
