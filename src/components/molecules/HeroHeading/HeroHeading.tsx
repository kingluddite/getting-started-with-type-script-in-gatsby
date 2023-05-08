import React, { ReactNode } from 'react';
import {
  StyledHeroHeading,
  StyledHeroHeadingContent,
  StyledHeroHeadingContentHome,
} from './styles';
import wing from '../../../assets/images/wing.png';

interface Props {
  children?: ReactNode;
  home?: boolean;
  // Any other props that come into the component
}

/**
 * HeroHeading component renders the heading for the Hero section
 * @param {object} props - The props that are passed to the component
 * @param {ReactNode} props.children - The child elements of the component
 * @param {boolean} [props.home=false] - Flag indicating whether the component is used on the homepage
 * @returns {JSX.Element} - The JSX markup for the component
 */
function HeroHeading({ children, home = false }: Props) {
  return (
    <StyledHeroHeading>
      {/* Render the wing images on the homepage */}
      {home ? (
        <>
          <img src={wing} className="wing wing-left" alt="" />
          <img src={wing} className="wing wing-right" alt="" />
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
