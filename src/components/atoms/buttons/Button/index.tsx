// npm
import React from 'react';

// components
import MinorButton from '../MinorButton';
import OutlineButton from '../OutlineButton';
import SolidButton from '../SolidButton';

// types
import type { ButtonProps } from './types';

function Button({
  link,
  action,
  theme,
  disable,
  actionType,
  children,
  ...props
}: ButtonProps) {
  // Switch statement to render the appropriate button based on the theme
  switch (theme) {
    case `outline`:
      // Render OutlineButton for the 'outline' theme
      return (
        <OutlineButton
          link={link}
          action={action}
          actionType={actionType}
          {...props}
        >
          {children}
        </OutlineButton>
      );
    case `minor`:
      // Render MinorButton for the 'minor' theme
      return (
        <MinorButton
          link={link}
          action={action}
          actionType={actionType}
          disable={disable}
          {...props}
        >
          {children}
        </MinorButton>
      );
    case `primary`:
    case `solid`:
    default:
      // Render SolidButton for the 'primary' and 'solid' themes (default)
      return (
        <SolidButton
          link={link}
          action={action}
          actionType={actionType}
          {...props}
        >
          {children}
        </SolidButton>
      );
  }
}

export default Button;
