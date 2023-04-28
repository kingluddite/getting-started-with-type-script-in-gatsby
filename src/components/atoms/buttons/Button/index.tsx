/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import MinorButton from '../MinorButton';
import OutlineButton from '../OutlineButton';
import SolidButton from '../SolidButton';

interface ButtonProps {
  children: ReactNode;
  disable?: boolean;
  action?: any;
  link?: string;
  theme?: string;
  actionType: string;
}

function Button({
  link,
  action,
  theme,
  disable,
  actionType,
  children,
  ...props
}: ButtonProps) {
  switch (theme) {
    case `outline`:
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
