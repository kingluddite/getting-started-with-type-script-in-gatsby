import React from 'react';
import {
  GatsbyImage,
  getImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from 'gatsby-plugin-image';
import { StyledFigure } from './styles';

interface ExtendedGatsbyImageProps extends GatsbyImageProps {
  width?: number;
  height?: number;
}

// describes the shape of the props that the ImageContainer component expects
interface ImageContainerProps {
  width?: number;
  height?: number;
  className?: string;
  image?: any;
  alt: string;
  type?: 'static' | 'gatsby' | 'dynamic';
  [propName: string]: any; // allow for any additional props to be passed in to the component
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  width,
  height,
  image,
  alt,
  type,
  ...props
}) => {
  const imageData = getImage(image) as IGatsbyImageData | undefined;

  switch (type) {
    case `static`:
      // we're checking if imageData is truthy before rendering it as an GatsbyImage. If it's undefined, we render the image prop directly
      return imageData ? (
        <StyledFigure style={{ width: `auto`, height: `auto` }}>
          <GatsbyImage image={imageData} alt={alt} />
        </StyledFigure>
      ) : (
        <StyledFigure style={{ width: `auto`, height: `auto` }}>
          {image}
        </StyledFigure>
      );
    default:
      return (
        <StyledFigure style={{ width: `auto`, height: `auto` }}>
          {/* A type assertion to cast the imageData variable to the IGatsbyImageData type when passing it to the GatsbyImage component. */}
          <GatsbyImage
            width={width}
            height={height}
            {...(props as ExtendedGatsbyImageProps)} // cast props to ExtendedGatsbyImageProps
          />
        </StyledFigure>
      );
  }
};

export default ImageContainer;
export type { ImageContainerProps };
