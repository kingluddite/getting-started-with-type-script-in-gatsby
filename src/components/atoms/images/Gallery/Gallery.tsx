// Import required dependencies
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
} from 'gatsby-plugin-image';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

// Import component styles
import { StyledSection, StyledGallery } from './styles';

// Define types for the image data and component props
type Image = GatsbyImageProps | null | undefined;

export type GalleryProps = {
  images: (GatsbyImageProps & {
    imageData: IGatsbyImageData | undefined;
    alt?: string;
    loading?: 'auto' | 'lazy' | 'eager';
    className?: string;
    style?: React.CSSProperties;
  })[];
};

type CustomImageProps = GatsbyImageProps & {
  asset: {
    id: string;
    alt: string;
    // any other properties your image object may have
  };
};

type CustomGatsbyImageProps = {
  imageData?: IGatsbyImageData;
  alt?: string;
  asset: {
    id: string;
    alt: string;
    // any other properties your image object may have
  };
} & Omit<GatsbyImageProps, 'image'> & { image: any | undefined };

// Define a function to retrieve Gatsby image data from an image object
const getGatsbyImageData = (image: Image): CustomGatsbyImageProps => {
  // Get the Gatsby image data from the provided image object
  const imageData = getImage((image as CustomImageProps)?.asset);

  // If the image object is null or undefined, return a placeholder object with default values for the component props
  if (!image) {
    return {
      image: undefined,
      imageData: imageData?.images?.fallback?.src ? imageData : undefined,
      asset: {
        id: (image as CustomImageProps | undefined)?.asset?.id || ``,
        alt: (image as CustomImageProps | undefined)?.asset?.alt || ``,
      },
      alt: ``,
    };
  }

  // Otherwise, return an object with the component props based on the image object and its image data
  return {
    image: null,
    imageData: imageData?.images?.fallback?.src ? imageData : undefined,
    asset: {
      id: (image as CustomImageProps).asset.id,
      alt: (image as CustomImageProps).asset.alt,
    },
    alt: image.alt || ``,
  };
};

// Define the Gallery component
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  // Set up intersection observer for the component
  const [galleryRef, { entry }] = useIntersectionObserver({
    threshold: 0.2, // The threshold for the intersection observer, which determines when the component becomes visible in the viewport
  });

  const [wasEverVisible, setWasEverVisible] = useState(false); // State variable that tracks whether the component has ever been visible in the viewport

  // Convert each ImageWithImageData object to a CustomGatsbyImageProps object using the getGatsbyImageData function
  const customImages: CustomGatsbyImageProps[] = images.map((image) =>
    getGatsbyImageData(image),
  );

  // Set breakpoints for the Masonry layout, based on the number of images in the array

  // Define the breakpoints for the number of images to display
  const breakpoints: { [key: string]: number } = {
    default: images.length >= 3 ? 3 : images.length > 1 ? 2 : 1, // The default breakpoint displays 3 images if there are 3 or more images, 2 images if there are 2, and 1 image otherwise
    1000: images.length >= 3 ? 3 : images.length > 1 ? 2 : 1, // For screens with a width of 1000px or less, display the same number of images as the default breakpoint
    768: images.length > 1 ? 2 : 1, // For screens with a width of 768px or less, display 2 images if there are 2 or more images, and 1 image otherwise
    480: 1, // For screens with a width of 480px or less, display only 1 image
  };

  // Set up an effect to update state when the component becomes visible in the viewport
  useEffect(() => {
    if (entry?.isIntersecting === true && !wasEverVisible) {
      // If the component is visible in the viewport and has not been visible before
      setWasEverVisible(true); // Set wasEverVisible to true
    }
  }, [entry, wasEverVisible]);

  // Set up an effect to animate the images when they become visible in the viewport
  useEffect(() => {
    if (wasEverVisible) {
      // If the component has ever been visible in the viewport
      const options = [{ yPercent: -200 }, { xPercent: -200 }]; // Define the animation options
      const randomizer = Math.floor(Math.random() * 2); // Randomly choose one of the options
      gsap.from(`.gallery .gatsby-image-wrapper`, {
        // Animate the images with gsap library
        opacity: 0, // Start with 0 opacity
        stagger: 0.1, // Stagger the animation by 0.1s
        ...options[randomizer], // Apply the chosen animation option
      });
    }
  }, [images, galleryRef, wasEverVisible]);

  // Render the component
  return (
    <StyledSection>
      <StyledGallery className="gallery" ref={galleryRef}>
        <Masonry
          breakpointCols={breakpoints} // Set the breakpoints for the number of images to display
          className="masonry"
          columnClassName="masonry_column"
        >
          {customImages.map((image, index) => (
            <div
              key={index}
              className={`image-wrapper${wasEverVisible ? ` was-visible` : ``}`}
            >
              <GatsbyImage
                image={image.imageData!}
                alt={image.alt || ``}
                loading={image.loading || `lazy`}
                className={image.className || ``}
                style={image.style || {}}
              />
            </div>
          ))}
        </Masonry>
      </StyledGallery>
    </StyledSection>
  );
};

export default Gallery;
