import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

// styles
import { StyledFigure } from './styles';

// types
import type { ImageContainerProps } from './types';

const ImageContainer: React.FC<ImageContainerProps> = ({
  width,
  height,
  image,
  alt,
  type,
  ...props
}) => {
  let imageData = null;

  if (type !== `static`) {
    imageData = getImage(image);
  }

  switch (type) {
    case `static`:
      return (
        <StyledFigure style={{ width: `auto`, height: `auto` }}>
          {image}
        </StyledFigure>
      );
    default:
      return imageData ? (
        <StyledFigure style={{ width, height }}>
          <GatsbyImage
            image={imageData}
            alt={alt}
            style={{ width: `100%`, height: `100%` }}
            {...props}
          />
        </StyledFigure>
      ) : null;
  }
};

export default ImageContainer;
