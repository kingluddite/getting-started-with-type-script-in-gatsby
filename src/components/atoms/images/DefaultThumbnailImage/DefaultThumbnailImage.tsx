import React from 'react';
import defaultThumbnail from '../../../../assets/images/default-aef-thumbnail-logo.jpg';

interface Props {
  width: number;
  height: number;
  borderRadius?: string;
  className?: string;
}

function DefaultThumbnailImage({
  width,
  height,
  borderRadius,
  className,
}: Props) {
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
