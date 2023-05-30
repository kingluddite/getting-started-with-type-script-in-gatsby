// npm
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TopNavDropdown from './TopNavDropdown';
import { describe, it, expect, vi } from 'vitest';

describe(`TopNavDropdown`, () => {
  const mockDropdownLinkData = [
    { type: `gatsby`, text: `Home`, url: `/` },
    { type: `external`, text: `Blog`, url: `https://example.com/blog` },
    { type: `gatsby`, text: `About`, url: `/about` },
  ];

  const mockLocation: Location = {
    pathname: `/about`,
    search: ``,
    hash: ``,
    assign: vi.fn(() => 0),
    reload: vi.fn(() => 0),
    replace: vi.fn(() => 0),
    ancestorOrigins: [] as any,
    host: `localhost`,
    hostname: `localhost`,
    href: `/`,
    origin: `http://localhost`,
    port: `80`,
    protocol: `http`,
  };

  it(`should render the dropdown button text`, () => {
    const { getByText } = render(
      <MemoryRouter>
        <TopNavDropdown
          buttonText="Dropdown"
          dropdownLinkData={mockDropdownLinkData}
          location={mockLocation}
        />
      </MemoryRouter>,
    );

    const dropdownButton = getByText(`Dropdown`);
    expect(dropdownButton).toBeInTheDocument();
  });

  it(`should render the dropdown links`, () => {
    const { getByText } = render(
      <MemoryRouter>
        <TopNavDropdown
          buttonText="Dropdown"
          dropdownLinkData={mockDropdownLinkData}
          location={mockLocation}
        />
      </MemoryRouter>,
    );

    const homeLink = getByText(`Home`);
    expect(homeLink).toBeInTheDocument();

    const blogLink = getByText(`Blog`);
    expect(blogLink).toBeInTheDocument();

    const aboutLink = getByText(`About`);
    expect(aboutLink).toBeInTheDocument();
  });
});
