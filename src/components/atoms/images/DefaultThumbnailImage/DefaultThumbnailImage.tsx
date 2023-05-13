// npm
import React from 'react';

// image
import defaultThumbnail from '@images/default-aef-thumbnail-logo.jpg';

// types
import type { DefaultThumbnailImageProps } from './types';

function DefaultThumbnailImage({
  width,
  height,
  borderRadius,
  className,
}: DefaultThumbnailImageProps) {
  return (
    <img
      src={defaultThumbnail}
      alt="AEF Logo"
      width={width}
      height={height}
      style={{ borderRadius, objectFit: `cover` }}
      className={className}
    />
  );
}

export default DefaultThumbnailImage;
