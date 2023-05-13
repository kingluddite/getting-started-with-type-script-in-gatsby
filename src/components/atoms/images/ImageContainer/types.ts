import { GatsbyImageProps } from 'gatsby-plugin-image';

export interface ExtendedGatsbyImageProps extends GatsbyImageProps {
  width?: number;
  height?: number;
}

// describes the shape of the props that the ImageContainer component expects
export interface ImageContainerProps {
  width?: number;
  height?: number;
  className?: string;
  image?: any;
  alt: string;
  type?: 'static' | 'gatsby' | 'dynamic';
  [propName: string]: any; // allow for any additional props to be passed in to the component
}
