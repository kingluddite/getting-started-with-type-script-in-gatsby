// Import dependencies
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

// Import styles
import { StyledSection, StyledGallery } from './styles';

// Define types for the image data and component props

type Asset = {
  id: string;
  gatsbyImageData: IGatsbyImageData;
};

type Image = {
  id: string;
  asset: Asset;
  alt: string;
};

type GalleryProps = {
  images: Image[];
  type?: string;
  id?: string;
};

// Define a function to retrieve Gatsby image data from an image object
const getGatsbyImageData = (image: Image): IGatsbyImageData | undefined => {
  const imageData = getImage(image.asset);
  return imageData?.images?.fallback?.src ? imageData : undefined;
};

// Define the Gallery component
export default function Gallery({ images }: GalleryProps) {
  // Set up intersection observer for the component
  const [galleryRef, { entry }] = useIntersectionObserver();
  const [wasEverVisible, setWasEverVisible] = useState(false);

  // Set breakpoints for the Masonry layout
  const breakpoints = {
    default: images.length >= 3 ? 3 : images.length > 1 ? 2 : 1,
    1000: images.length >= 3 ? 3 : images.length > 1 ? 2 : 1,
    768: images.length > 1 ? 2 : 1,
    480: 1,
  };

  // Set up an effect to update state when the component becomes visible in the viewport
  useEffect(() => {
    if (entry && typeof entry.isIntersecting === `boolean` && !wasEverVisible) {
      setWasEverVisible(entry.isIntersecting);
    }
  }, [entry, wasEverVisible]);

  // Set up an effect to animate the images when they become visible in the viewport
  useEffect(() => {
    if (wasEverVisible) {
      const options = [{ yPercent: -200 }, { xPercent: -200 }];
      const randomizer = Math.floor(Math.random() * 2);
      gsap.from(`.gallery .gatsby-image-wrapper`, {
        opacity: 0,
        stagger: 0.1,
        ...options[randomizer],
      });
    }
  }, [images, galleryRef, wasEverVisible]);

  // Render the component
  return (
    <StyledSection>
      <StyledGallery className="gallery" ref={galleryRef}>
        <Masonry
          breakpointCols={breakpoints}
          className="masonry"
          columnClassName="masonry_column"
          style={{ visibility: wasEverVisible ? `visible` : `hidden` }}
        >
          {images.map((image) => {
            const imageData = getGatsbyImageData(image);
            return imageData ? (
              <GatsbyImage
                key={image.id}
                loading="lazy"
                image={imageData}
                alt={image.alt}
              />
            ) : null;
          })}
        </Masonry>
      </StyledGallery>
    </StyledSection>
  );
}
