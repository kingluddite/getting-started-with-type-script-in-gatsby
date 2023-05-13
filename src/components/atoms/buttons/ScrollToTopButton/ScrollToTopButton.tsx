// Overall, this component provides a scroll-to-top button functionality that appears when the user scrolls down the page, allowing them to easily navigate back to the top.

// npm
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// hook used to track the vertical scroll position of the page. It returns the current scroll position (scrollY).
import useScrollPosition from '@react-hook/window-scroll';

// styles
import { StyledButtonScrollToTop, StyledFontAwesomeIcon } from './styles';

// when the button is clicked. It scrolls the window back to the top of the page with a smooth scrolling behavior.
function ScrollToTopButton() {
  // The component returns JSX, rendering a button (StyledButtonScrollToTop). The button's visibility and position are controlled by the scrollY value. When scrollY is not equal to 0 (indicating that the user has scrolled down), the button is visible and positioned at the bottom of the page. Otherwise, when scrollY is 0 (indicating that the user is at the top of the page), the button is hidden (bottom: -100).
  const scrollY = useScrollPosition(60);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }

  return (
    <StyledButtonScrollToTop
      onClick={scrollToTop}
      style={scrollY !== 0 ? {} : { bottom: -100 }}
    >
      {/* Inside the button, there's an optional rendering of the faChevronUp icon (StyledFontAwesomeIcon). The icon is only rendered when the user has scrolled down (scrollY is not equal to 0). */}
      {scrollY !== 0 ? <StyledFontAwesomeIcon icon={faChevronUp} /> : null}
    </StyledButtonScrollToTop>
  );
}

export default ScrollToTopButton;
