/* eslint-disable react/jsx-props-no-spreading */
// npm
import React, { ReactNode } from 'react';

// styles
import {
  StyledLinkPrimary,
  StyledAnchorPrimary,
  StyledButtonPrimary,
} from './styles';

type SolidButtonProps = {
  action: any;
  actionType: string;
  children: ReactNode;
  link: string;
};

function SolidButton({
  actionType,
  link,
  action = () => false,
  children,
  ...props
}: SolidButtonProps) {
  switch (actionType) {
    case `link`:
    case `internal`:
      return (
        <StyledLinkPrimary to={link || `/`} {...props}>
          {children}
        </StyledLinkPrimary>
      );
    case `anchor`:
    case `external`:
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
      return (
        <StyledButtonPrimary onClick={action} {...props}>
          {children}
        </StyledButtonPrimary>
      );
  }
}

export default SolidButton;
