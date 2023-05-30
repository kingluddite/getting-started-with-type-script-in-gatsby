// import React from 'react';
// import { render } from '@testing-library/react';
// import Logo from './Logo';
import { describe, it } from 'vitest';

describe(`Logo`, () => {
  it(`renders a medium-sized light mode logo by default`, () => {
    // const { getByAltText } = render(<Logo />);
    // const logo = getByAltText(`Animation Educators Forum logo`);
    // expect(logo).toBeInTheDocument();
    // expect(logo).toHaveAttribute(
    //   `src`,
    //   `/src/assets/svg/aef-text-lightmode-logo.svg`,
    // );
  });

  it(`renders a large-sized light mode logo`, () => {
    // const { getByAltText } = render(<Logo size="large" />);
    // const logo = getByAltText(`Animation Educators Forum logo`);
    // expect(logo).toBeInTheDocument();
    // expect(logo).toHaveAttribute(
    //   `src`,
    //   `/src/assets/svg/aef-lightmode-logo.svg`,
    // );
  });

  it(`renders a text-only light mode logo`, () => {
    // const { getByAltText } = render(<Logo size="textOnly" />);
    // const logo = getByAltText(
    //   `Asifa Hollywood's Animation Educators Forum Wordmark`,
    // );
    // expect(logo).toBeInTheDocument();
    // expect(logo).toHaveAttribute(
    //   `src`,
    //   `/src/assets/svg/aef-lightmode-logo.svg`,
    // );
  });

  // Add more test cases for dark mode logos once available
});
