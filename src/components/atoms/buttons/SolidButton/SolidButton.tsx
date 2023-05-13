// npm
import React from 'react';

// styles
import {
  StyledLinkPrimary,
  StyledAnchorPrimary,
  StyledButtonPrimary,
} from './styles';

// types
import type { SolidButtonProps } from './types';

function SolidButton({
  actionType,
  link,
  action = () => false,
  children,
  ...props
}: SolidButtonProps) {
  // Determine the action type and render the appropriate button
  switch (actionType) {
    case `link`:
    case `internal`:
      // Render a button as a Gatsby Link
      return (
        <StyledLinkPrimary to={link || `/`} {...props}>
          {children}
        </StyledLinkPrimary>
      );
    case `anchor`:
    case `external`:
      // Render a button as an anchor (<a>) tag for external links
      return (
        <StyledAnchorPrimary
          href={link || `#`}
          target="_blank"
          rel="noreferrer noopener"
          {...props}
        >
          {children}
        </StyledAnchorPrimary>
      );
    case `button`:
    default:
      // Render a regular button element
      return (
        <StyledButtonPrimary onClick={action} {...props}>
          {children}
        </StyledButtonPrimary>
      );
  }
}

export default SolidButton;
