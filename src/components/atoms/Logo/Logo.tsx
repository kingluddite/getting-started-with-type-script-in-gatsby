import React from 'react';
import AEFLogoLight from '../../../assets/svg/aef-lightmode-logo.svg';
import AEFTextLogoLight from '../../../assets/svg/aef-text-lightmode-logo.svg';
import {
  StyledLogoTextOnly,
  StyledLogoMedium,
  StyledLogoLarge,
} from './styles';

function Logo({ mode = `light`, size = `medium` }) {
  if (mode === `light`) {
    switch (size) {
      case `large`:
        return (
          <StyledLogoLarge
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
      case `textOnly`:
        return (
          <StyledLogoTextOnly
            src={AEFTextLogoLight}
            alt="Asifa Hollywood\s Animation Educators Forum Wordmark"
          />
        );
      case `medium`:
      default:
        return (
          <StyledLogoMedium
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
    }
  } else {
    // Eventually this should be switched to the dark mode logo
    switch (size) {
      case `large`:
        return (
          <StyledLogoLarge
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
      case `textOnly`:
        return (
          <StyledLogoTextOnly
            src={AEFTextLogoLight}
            alt="Asifa Hollywood\s Animation Educators Forum Wordmark"
          />
        );
      case `medium`:
      default:
        return (
          <StyledLogoMedium
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
    }
  }
}

export default Logo;
