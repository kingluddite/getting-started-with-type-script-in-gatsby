import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type GalleryProps = {
  images: Array<{
    id: string;
    alt?: string;
    asset: {
      id: string;
      gatsbyImageData: IGatsbyImageData;
    };
    loading?: 'lazy' | 'eager';
    className?: string;
    style?: React.CSSProperties;
  }> | null;
  type?: string;
};
