// npm
import React from 'react';

// styles
import {
  StyledButtonOutline,
  StyledLinkOutline,
  StyledAnchorOutline,
} from './styles';

// types
import type { OutlineButtonProps } from './types';

function OutlineButton({
  action = () => false,
  actionType,
  children,
  link,
  ...props
}: OutlineButtonProps) {
  // Switch statement to determine the button type based on the actionType
  switch (actionType) {
    case `link`:
    case `internal`:
      // Render a link-based button for 'link' and 'internal' action types
      return (
        <StyledLinkOutline to={link || `/`} {...props}>
          {children}
        </StyledLinkOutline>
      );
    case `anchor`:
    case `external`:
      // Render an anchor-based button for 'anchor' and 'external' action types
      return (
        <StyledAnchorOutline
          href={link || `#`}
          target="_blank"
          rel="noreferrer noopener"
          {...props}
        >
          {children}
        </StyledAnchorOutline>
      );
    case `button`:
    default:
      // Render a regular button for the 'button' action type (default)
      return (
        <StyledButtonOutline onClick={action} {...props}>
          {children}
        </StyledButtonOutline>
      );
  }
}

export default OutlineButton;
