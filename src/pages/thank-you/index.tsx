// npm
import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import ContentBlock from '@components/molecules/ContentBlock';
import SEO from '@shared/SEO';
import LayoutContainer from '@shared/layout/LayoutContainer';
import HeroHeading from '@components/molecules/HeroHeading';
import Button from '@components/atoms/buttons/Button';
import Logo from '@components/atoms/Logo';

// images
// import Gallery from '../components/atoms/Gallery';
import ImageContainer from '@components/atoms/images/ImageContainer';

// types
import { ThankYouPageData } from './types';

const ThankYouPage: React.FC<PageProps<ThankYouPageData>> = ({ data }) => {
  const {
    headingOne,
    name,
    subheading,
    thankYouTextBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.thankYouPage;

  return (
    <>
      <SEO title={name} />
      <HeroHeading>
        <Logo size="large" />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        <Button actionType="link" to="/">
          AEF Home
        </Button>
        {pageImageBlock?.asset?.gatsbyImageData ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <ContentBlock>
          <PortableText value={thankYouTextBlock} />
        </ContentBlock>
        {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
      </LayoutContainer>
    </>
  );
};

export const query = graphql`
  query ThankYouPageQuery {
    thankYouPage: sanityPage(name: { eq: "Thank You" }) {
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
      thankYouTextBlock: _rawContent
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

export default ThankYouPage;
