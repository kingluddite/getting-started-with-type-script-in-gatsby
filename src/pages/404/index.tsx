// npm
import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import SEO from '@components/shared/SEO';
import ContentBlock from '@components/molecules/ContentBlock';
import LayoutContainer from '@components/shared/layout/LayoutContainer';
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
import ImageContainer from '@components/atoms/images/ImageContainer';

// images
// import Gallery from '@components/atoms/images/Gallery';

// styles
import { StyledSection } from './styles';

// types
import type { PageProps } from 'gatsby';
import { NotFoundProps } from './types';

const NotFound: React.FC<PageProps<NotFoundProps>> = ({ data }) => {
  const {
    headingOne,
    // name,
    subheading,
    notFoundTextBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.notFoundPage;

  return (
    <>
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        {pageImageBlock?.asset?.gatsbyImageData ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
      </HeroHeading>

      <LayoutContainer hasSectionGaps>
        <StyledSection>
          <ContentBlock>
            <PortableText value={notFoundTextBlock} />
          </ContentBlock>
        </StyledSection>
        {/* <StyledSection>
          {hasGallery && galleryManyBlock ? (
            <Gallery images={galleryManyBlock} />
          ) : null}
        </StyledSection> */}
      </LayoutContainer>
    </>
  );
};

export default NotFound;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<NotFoundProps>) {
  const { name } = data.notFoundPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query NotFoundPageQuery {
    notFoundPage: sanityPage(name: { eq: "Not Found" }) {
      name
      headingOne
      subheading
      pageImageBlock {
        alt
        asset {
          id
          gatsbyImageData
        }
        hotspot {
          y
          x
          width
          height
        }
        crop {
          top
          right
          left
          bottom
        }
      }
      notFoundTextBlock: _rawContent
      hasGallery
      galleryManyBlock {
        alt
        asset {
          id
          gatsbyImageData
        }
        crop {
          top
          right
          left
          bottom
        }
        hotspot {
          y
          x
          width
          height
        }
      }
    }
  }
`;
