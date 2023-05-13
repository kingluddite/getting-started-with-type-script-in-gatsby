import React from 'react';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import { GatsbyImage } from 'gatsby-plugin-image';

// styles
import { StyledSection, StyledGallery } from './styles';

// types
import type { GalleryProps } from './types';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const breakpoints: { [key: string]: number } = {
    default: Math.min(images?.length || 0, 3) || 1,
    1000: Math.min(images?.length || 0, 3) || 1,
    768: Math.min(images?.length || 0, 2) || 1,
    480: 1,
  };

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

  return (
    <StyledSection>
      <StyledGallery className="gallery">
        <Masonry
          breakpointCols={breakpoints}
          className="masonry"
          columnClassName="masonry_column"
        >
          {images &&
            images.map((image) => (
              <div
                key={image.id}
                className="image-wrapper"
                ref={(element) => {
                  if (element) {
                    const observer = new IntersectionObserver(
                      ([entry]) => animateImage(entry),
                      {
                        threshold: 0.2,
                      },
                    );
                    observer.observe(element);
                  }
                }}
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
