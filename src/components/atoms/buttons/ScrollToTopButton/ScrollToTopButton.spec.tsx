import React from 'react';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ScrollToTopButton from './ScrollToTopButton';

describe(`ScrollToTopButton`, () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // Test case: Render the button
  it(`renders the button`, () => {
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole(`button`);
    expect(button).toBeInTheDocument();
  });

  // // Test case: Scroll to top when the button is clicked
  // it(`scrolls to top when clicked`, () => {
  //   const scrollToMock = vi.spyOn(window, `scrollTo`);
  //   const { getByRole } = render(<ScrollToTopButton />);
  //   const button = getByRole(`button`);
  //   fireEvent.click(button);
  //   expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: `smooth` });
  //   expect(scrollToMock).toHaveBeenCalledTimes(1);
  // });

  // Test case: Hide the button when at the top of the page
  it(`hides the button when at the top of the page`, () => {
    const scrollYGetter = vi.spyOn(window, `scrollY`, `get`).mockReturnValue(0);
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole(`button`);
    expect(button).toHaveStyle({ bottom: `-100px` });
    expect(scrollYGetter).toHaveBeenCalledTimes(2);
    // Explanation: The spy is called twice: once during initial rendering and again when checking the style.
  });

  // Test case: Show the button when scrolled down
  it(`shows the button when scrolled down`, () => {
    const scrollYGetter = vi
      .spyOn(window, `scrollY`, `get`)
      .mockReturnValue(100);
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole(`button`);
    expect(button).not.toHaveStyle({ bottom: `-100px` });
    expect(scrollYGetter).toHaveBeenCalledTimes(2);
    // Explanation: The spy is called twice: once during initial rendering and again when checking the style.
  });
});
