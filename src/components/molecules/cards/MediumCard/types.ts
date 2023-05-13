import React from 'react';

export interface MediumCardProps {
  cardType?: string;
  actionType: string;
  to?: string;
  href?: string;
  tagText?: string;
  title: string;
  description?: string;
  image?: React.ReactNode;
}
