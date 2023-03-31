/* eslint-disable react/jsx-props-no-spreading */
// npm
import React, { ReactNode } from 'react';

// styles
import {
  StyledButtonOutline,
  StyledLinkOutline,
  StyledAnchorOutline,
} from './styles';

type OutlineButtonProps = {
  action: any;
  actionType: string;
  children: ReactNode;
  link: string;
};

function OutlineButton({
  action = () => false,
  actionType,
  children,
  link,
  ...props
}: OutlineButtonProps) {
  switch (actionType) {
    case `link`:
    case `internal`:
      return (
        <StyledLinkOutline to={link || `/`} {...props}>
          {children}
        </StyledLinkOutline>
      );
    case `anchor`:
    case `external`:
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
      return (
        <StyledButtonOutline onClick={action} {...props}>
          {children}
        </StyledButtonOutline>
      );
  }
}

export default OutlineButton;
