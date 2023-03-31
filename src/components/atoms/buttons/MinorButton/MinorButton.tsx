/* eslint-disable react/jsx-props-no-spreading */
// npm
import React, { ReactNode } from 'react';
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

type MinorButtonProps = {
  action: any;
  actionType: string;
  children: ReactNode;
  disable?: boolean;
  link: string;
  as?: any;
};

export default function MinorButton({
  actionType,
  link,
  action = () => false,
  disable,
  children,
  ...props
}: MinorButtonProps) {
  switch (actionType) {
    case `link`:
    case `internal`:
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
      return (
        <StyledButtonMinor onClick={action} {...props}>
          <span>{children}</span>
        </StyledButtonMinor>
      );
  }
}
