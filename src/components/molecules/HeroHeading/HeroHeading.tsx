import React, { ReactNode } from 'react';
import {
  StyledHeroHeading,
  StyledHeroHeadingContent,
  StyledHeroHeadingContentHome,
} from './HeroHeadingStyles';
// import wing from '../images/wing.png';

interface Props {
  children?: ReactNode;
  home?: Boolean;
  // any props that come into the component
}
export default function HeroHeading({ children, home = false }: Props) {
  return (
    <StyledHeroHeading>
      {home ? (
        <>
          add images
          {/* <img src={wing} className="wing wing-left" alt="" /> */}
          {/* <img src={wing} className="wing wing-right" alt="" /> */}
        </>
      ) : null}
      <div className="grad grad-right" />
      <div className="grad grad-left" />
      <div className="grad grad-top" />
      {home ? (
        <StyledHeroHeadingContentHome>{children}</StyledHeroHeadingContentHome>
      ) : (
        <StyledHeroHeadingContent>{children}</StyledHeroHeadingContent>
      )}
      <div className="grad grad-bottom" />
    </StyledHeroHeading>
  );
}