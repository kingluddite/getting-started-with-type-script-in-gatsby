import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DesktopNavContent from './DesktopNavContent';
import { vi, describe, it, expect } from 'vitest';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { CustomDOMStringList } from './types';

describe(`DesktopNavContent`, () => {
  const mockNavLinkData = {
    about: [
      {
        label: `About`,
        url: `/about`,
        text: `Who We Are`,
      },
      // ... add more test data as needed
    ],
    engage: [
      {
        label: `Engage`,
        url: `/forum`,
        text: `The Forum`,
      },
      // ... add more test data as needed
    ],
    programs: [
      {
        label: `Programs`,
        url: `/scholarships`,
        text: `Student Scholarship`,
      },
      // ... add more test data as needed
    ],
    forms: [
      {
        label: `Join`,
        url: `/join`,
        text: `Join`,
      },
      // ... add more test data as needed
    ],
  };
  const mockSocialMediaData = [
    { icon: faShareAlt, url: `https://twitter.com` },
    { icon: faShareAlt, url: `https://facebook.com` },
  ];

  const mockLocation: Location = {
    pathname: `/about`,
    search: ``,
    hash: ``,
    assign: vi.fn(() => 0),
    reload: vi.fn(() => 0),
    replace: vi.fn(() => 0),
    ancestorOrigins: [] as unknown as CustomDOMStringList,
    host: `localhost`,
    hostname: `localhost`,
    href: `/about`,
    origin: `http://localhost`,
    port: `80`,
    protocol: `http`,
  };

  it(`renders navigation links and toggles social media links on button click`, () => {
    render(
      <DesktopNavContent
        location={mockLocation}
        navLinkData={mockNavLinkData}
        socialMediaData={mockSocialMediaData}
      />,
    );

    // Verify navigation links are rendered
    expect(screen.getByText(`About`)).toBeInTheDocument();
    expect(screen.getByText(`Engage`)).toBeInTheDocument();
    expect(screen.getByText(`Programs`)).toBeInTheDocument();
    expect(screen.getByText(`Join Us`)).toBeInTheDocument();
    expect(screen.getByText(`Contact`)).toBeInTheDocument();
    expect(screen.getByAltText(`ASIFA-Hollywood Logo`)).toBeInTheDocument();

    // Verify social media links are not initially visible
    expect(screen.queryByTestId(`social-link`)).toBeNull();

    // Click the toggle button to show social media links
    fireEvent.click(screen.getByTestId(`toggle-button`));

    // Verify social media links are now visible
    expect(screen.getByTestId(`social-link-0`)).toBeInTheDocument();
    expect(screen.getByTestId(`social-link-1`)).toBeInTheDocument();

    // Click the toggle button again to hide social media links
    fireEvent.click(screen.getByTestId(`toggle-button`));

    // Verify social media links are no longer visible
    expect(screen.queryByTestId(`social-link`)).toBeNull();
  });
});
