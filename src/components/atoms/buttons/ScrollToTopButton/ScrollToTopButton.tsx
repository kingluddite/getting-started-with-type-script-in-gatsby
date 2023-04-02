/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
// npm
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useScrollPosition from '@react-hook/window-scroll';

// styles
import { StyledButtonScrollToTop, StyledFontAwesomeIcon } from './styles';

function ScrollToTopButton() {
  const scrollY = useScrollPosition(60);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }

  return (
    <StyledButtonScrollToTop
      onClick={scrollToTop}
      style={scrollY !== 0 ? {} : { bottom: -100 }}
    >
      {scrollY !== 0 ? <StyledFontAwesomeIcon icon={faChevronUp} /> : null}
    </StyledButtonScrollToTop>
  );
}

export default ScrollToTopButton;
