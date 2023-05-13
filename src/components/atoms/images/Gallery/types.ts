import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type GalleryProps = {
  images: Array<{
    id: string;
    alt?: string;
    imageData?: IGatsbyImageData;
    loading?: 'lazy' | 'eager';
    className?: string;
    style?: React.CSSProperties;
  }> | null;
};
