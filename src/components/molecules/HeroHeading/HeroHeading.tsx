// npm
import React from 'react';

// styles
import {
  StyledHeroHeading,
  StyledHeroHeadingContent,
  StyledHeroHeadingContentHome,
} from './styles';

// images
import wing from '@images/wing.png';

// types
import type { HeroHeadingProps } from './types';

/**
 * HeroHeading component renders the heading for the Hero section
 * @param {object} props - The props that are passed to the component
 * @param {ReactNode} props.children - The child elements of the component
 * @param {boolean} [props.home=false] - Flag indicating whether the component is used on the homepage
 * @returns {JSX.Element} - The JSX markup for the component
 */
function HeroHeading({ children, home = false }: HeroHeadingProps) {
  return (
    <StyledHeroHeading>
      {/* Render the wing images on the homepage */}
      {home ? (
        <>
          <img
            src={wing}
            className="wing wing-left"
            alt=""
            data-testid="wing-left"
          />
          <img
            src={wing}
            className="wing wing-right"
            alt=""
            data-testid="wing-right"
          />
        </>
      ) : null}
      {/* Gradient effects */}
      <div className="grad grad-right" />
      <div className="grad grad-left" />
      <div className="grad grad-top" />
      {/* Render different styles for the homepage and other pages */}
      {home ? (
        <StyledHeroHeadingContentHome>{children}</StyledHeroHeadingContentHome>
      ) : (
        <StyledHeroHeadingContent>{children}</StyledHeroHeadingContent>
      )}
      <div className="grad grad-bottom" />
    </StyledHeroHeading>
  );
}

export default HeroHeading;
