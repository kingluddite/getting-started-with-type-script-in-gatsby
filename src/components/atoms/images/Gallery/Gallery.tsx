import * as React from 'react';
import { useEffect, useState } from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import 'intersection-observer';

// Import styles
import { StyledSection, StyledGallery } from './styles';

// Import types
import type { GalleryProps } from './types';

// Define the Gallery component
const Gallery: React.FC<GalleryProps> = ({ images, type }) => {
  const [galleryRef, { entry }] = useIntersectionObserver();
  const [wasEverVisible, setWasEverVisible] = useState<boolean>(false);

  // Define breakpoints for responsive masonry layout
  const breakpoints: { [key: string]: number } = {
    default: Math.min(images?.length || 0, 3) || 1,
    1000: Math.min(images?.length || 0, 3) || 1,
    768: Math.min(images?.length || 0, 2) || 1,
    480: 1,
  };

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    // Callback function when images intersect the viewport
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      animateImage(entry);
    };

    // Create intersection observer if the browser supports it
    if (
      typeof window !== `undefined` &&
      typeof IntersectionObserver !== `undefined`
    ) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2,
      });

      // Observe all image-wrapper elements
      const imageWrappers = document.querySelectorAll(`.image-wrapper`);
      imageWrappers.forEach((element) => {
        observer?.observe(element);
      });
    }

    // Clean up the observer when the component is unmounted or updated
    return () => {
      observer?.disconnect();
    };
  }, []);

  // Track if the gallery section has ever been visible to the user
  useEffect(() => {
    if (entry && !wasEverVisible) {
      setWasEverVisible(entry && entry.isIntersecting);
    }
  }, [entry, wasEverVisible]);

  // Animate images when they are visible to the user
  useEffect(() => {
    if (wasEverVisible) {
      const options = [{ yPercent: -200 }, { xPercent: -200 }];

      // Animate each image using GSAP animation library
      images &&
        images.forEach((_, index) => {
          const randomizer = Math.floor(Math.random() * 2);
          gsap.from(`.gallery .image-wrapper-${index} .gatsby-image-wrapper`, {
            opacity: 0,
            stagger: 0.1,
            ...options[randomizer],
          });
        });
    }
  }, [images, galleryRef, wasEverVisible]);

  // Animate a single image when it intersects the viewport
  const animateImage = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const options = [{ yPercent: -200 }, { xPercent: -200 }];
      const randomizer = Math.floor(Math.random() * 2);
      gsap.from(entry.target, {
        opacity: 0,
        stagger: 0.1,
        ...options[randomizer],
      });
    }
  };

  // Determine which Masonry component to render based on the type
  const masonryComponent =
    images && images.length > 0 ? (
      type === `static` ? (
        // Static gallery layout using Masonry
        <Masonry
          breakpointCols={breakpoints}
          className="masonry"
          columnClassName="masonry_column"
          style={{ visibility: wasEverVisible ? `visible` : `hidden` }}
        >
          {/* Render images */}
          {images?.map((image, index) => (
            <div
              key={type === `static` ? image.id : image.asset.id}
              className={`image-wrapper-${index}`}
            >
              {/* Render GatsbyImage for each image */}
              {image.asset && image.asset.gatsbyImageData && (
                <GatsbyImage
                  loading={image.loading || undefined}
                  image={image.asset.gatsbyImageData}
                  alt={image.alt || ``}
                />
              )}
            </div>
          ))}
        </Masonry>
      ) : (
        // Dynamic gallery layout using Masonry
        <Masonry
          breakpointCols={breakpoints}
          className="masonry"
          columnClassName="masonry_column"
          style={{ visibility: wasEverVisible ? `visible` : `hidden` }}
        >
          {/* Render images */}
          {images?.map((image, index) => (
            <div
              key={image.asset && image.asset.id}
              className={`image-wrapper-${index}`}
            >
              {/* Render GatsbyImage for each image */}
              {image.asset && image.asset.gatsbyImageData && (
                <GatsbyImage
                  loading="lazy"
                  image={
                    getImage(image.asset.gatsbyImageData) as IGatsbyImageData
                  }
                  alt={image.alt || ``}
                />
              )}
            </div>
          ))}
        </Masonry>
      )
    ) : null;

  // Render the Gallery component
  return (
    <StyledSection>
      <StyledGallery className="gallery" ref={galleryRef}>
        {masonryComponent}
      </StyledGallery>
    </StyledSection>
  );
};

export default Gallery;
