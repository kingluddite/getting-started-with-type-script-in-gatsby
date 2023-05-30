import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type BaseButtonProps = {
  actionType: 'link' | 'internal' | 'anchor' | 'external' | 'button';
  link?: string;
  action?: () => void;
  children: React.ReactNode;
};

type ButtonActionProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorActionProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type SolidButtonProps = ButtonActionProps | AnchorActionProps;
