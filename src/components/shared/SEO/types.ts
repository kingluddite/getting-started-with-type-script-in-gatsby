import { ReactNode } from 'react';

export type SEOProps = {
  children?: ReactNode;
  description?: string;
  image?: string;
  location?: any;
  pathname?: string;
  title: string;
};
