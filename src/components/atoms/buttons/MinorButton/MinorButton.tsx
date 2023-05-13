// npm
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { VisuallyHidden } from '@reach/visually-hidden';

// styles
import {
  StyledAnchorMinor,
  StyledButtonMinor,
  StyledFontAwesomeIcon,
  StyledFontAwesomeIconRotated,
  StyledLinkMinor,
} from './styles';

// types
import type { MinorButtonProps } from './types';

export default function MinorButton({
  actionType,
  link,
  action = () => false,
  disable,
  children,
  ...props
}: MinorButtonProps) {
  // Switch statement to determine the button type based on the actionType
  switch (actionType) {
    case `link`:
    case `internal`:
      // Render a link-based button for 'link' and 'internal' action types
      return (
        <StyledLinkMinor as={disable && `span`} to={link || `/`} {...props}>
          <span>{children}</span>
          <StyledFontAwesomeIcon
            className="minor-icon-right"
            icon={faArrowRight}
          />
        </StyledLinkMinor>
      );
    case `anchor`:
    case `external`:
      // Render an anchor-based button for 'anchor' and 'external' action types
      return (
        <StyledAnchorMinor
          as={disable && `span`}
          href={link || `#`}
          target="_blank"
          rel="noreferrer noopener"
          {...props}
        >
          <span>{children}</span>
          <StyledFontAwesomeIconRotated
            className="minor-icon-up-right"
            icon={faArrowRight}
          />
          <VisuallyHidden>opens in a new window</VisuallyHidden>
        </StyledAnchorMinor>
      );
    case `button`:
    default:
      // Render a regular button for the 'button' action type (default)
      return (
        <StyledButtonMinor onClick={action} {...props}>
          <span>{children}</span>
        </StyledButtonMinor>
      );
  }
}
