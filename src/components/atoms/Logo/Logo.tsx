// npm
import React from 'react';

// images
import AEFLogoLight from '@svg/aef-lightmode-logo.svg';
import AEFTextLogoLight from '@svg/aef-text-lightmode-logo.svg';

// styles
import {
  StyledLogoTextOnly,
  StyledLogoMedium,
  StyledLogoLarge,
} from './styles';

function Logo({ mode = `light`, size = `medium` }) {
  // Render the appropriate logo based on the mode and size
  if (mode === `light`) {
    switch (size) {
      case `large`:
        // Render a large logo with light mode
        return (
          <StyledLogoLarge
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
      case `textOnly`:
        // Render a text-only logo with light mode
        return (
          <StyledLogoTextOnly
            src={AEFTextLogoLight}
            alt="Asifa Hollywood's Animation Educators Forum Wordmark"
          />
        );
      case `medium`:
      default:
        // Render a medium-sized logo with light mode (default size)
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
        // Render a large logo with dark mode (currently using light mode logo)
        return (
          <StyledLogoLarge
            src={AEFLogoLight}
            alt="Animation Educators Forum logo"
          />
        );
      case `textOnly`:
        // Render a text-only logo with dark mode (currently using light mode logo)
        return (
          <StyledLogoTextOnly
            src={AEFTextLogoLight}
            alt="Asifa Hollywood's Animation Educators Forum Wordmark"
          />
        );
      case `medium`:
      default:
        // Render a medium-sized logo with dark mode (currently using light mode logo)
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
