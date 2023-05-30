// npm
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// component tested
import MobileNavContent from './MobileNavContent';

describe(`MobileNavContent`, () => {
  const navLinkData = {
    about: [
      { text: `About Us`, url: `/about-us`, label: `About Us` },
      { text: `Mission`, url: `/mission`, label: `Mission` },
      { text: `Team`, url: `/team`, label: `Team` },
    ],
    engage: [
      { text: `Events`, url: `/events`, label: `Events` },
      { text: `Volunteer`, url: `/volunteer`, label: `Volunteer` },
      { text: `Membership`, url: `/membership`, label: `Membership` },
    ],
    programs: [
      { text: `Workshops`, url: `/workshops`, label: `Workshops` },
      { text: `Webinars`, url: `/webinars`, label: `Webinars` },
      { text: `Resources`, url: `/resources`, label: `Resources` },
    ],
    forms: [
      { text: `Contact Us`, url: `/contact-us`, label: `Contact Us` },
      { text: `Feedback`, url: `/feedback`, label: `Feedback` },
      { text: `Report Issue`, url: `/report-issue`, label: `Report Issue` },
    ],
    // Rest of the navLinkData object
  };

  const socialMediaData = [
    { icon: `facebook`, url: `https://www.facebook.com/asifa` },
    { icon: `twitter`, url: `https://www.twitter.com/asifa` },
    { icon: `instagram`, url: `https://www.instagram.com/asifa` },
  ];

  it(`should toggle menu when menu button is clicked`, () => {
    const setMenuOpenMock = vi.fn();

    const { getByTestId } = render(
      <MobileNavContent
        navLinkData={navLinkData}
        socialMediaData={socialMediaData}
        menuOpen={false}
        setMenuOpen={setMenuOpenMock}
      />,
    );

    const toggleButton = getByTestId(`toggle-button`);

    fireEvent.click(toggleButton);

    // Assert that setMenuOpen was called
    expect(setMenuOpenMock).toHaveBeenCalledTimes(1);
    expect(setMenuOpenMock).toHaveBeenCalledWith(true);

    // Assert that the aria-label attribute of the toggleButton element has been updated
    // expect(toggleButton).toHaveAttribute(`aria-label`, `Close nav menu`);

    fireEvent.click(toggleButton);

    // Assert that setMenuOpen was called again
    // expect(setMenuOpenMock).toHaveBeenCalledTimes(2);
    // expect(setMenuOpenMock).toHaveBeenCalledWith(false);

    // Assert that the aria-label attribute of the toggleButton element has been updated
    // expect(toggleButton).toHaveAttribute(`aria-label`, `Open nav menu`);
  });

  // Add more test cases for other functionality as needed
});
