// npm
import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { HeadProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import SEO from '@shared/SEO';
import Logo from '@components/atoms/Logo';

// images
// import Gallery from '../components/atoms/Gallery';
import LayoutContainer from '@shared/layout/LayoutContainer';
import ImageContainer from '@components/atoms/images/ImageContainer';

// types
import { GrantPageQuery } from './types';

function GrantsPage({ data }: { data: GrantPageQuery }) {
  const {
    headingOne,
    subheading,
    // headingTwo,
    grantImg,
    grantTextBlock,
    grantAwardBlock,
    grantEligibilityBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.grantPage;

  return (
    <>
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        {pageImageBlock ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
        <p className="image-caption">
          {pageImageBlock?.alt ? pageImageBlock.alt : ``}
        </p>
      </HeroHeading>

      <LayoutContainer hasSectionGaps>
        <ContentBlock
          heading={undefined}
          showImage={false}
          imageProps={
            grantImg?.asset?.gatsbyImageData && {
              image: grantImg?.asset?.gatsbyImageData,
              type: `dynamic`,
              alt: grantImg?.alt ? grantImg.alt : ``,
            }
          }
        >
          <PortableText value={grantTextBlock} />
        </ContentBlock>
        <ContentBlock
          heading={grantAwardBlock.grantAwardBlockHeading || undefined}
          showImage={
            grantAwardBlock?.grantAwardImageBlock?.asset?.gatsbyImageData ??
            false
          }
          imageProps={{
            image:
              grantAwardBlock?.grantAwardImageBlock?.asset?.gatsbyImageData ??
              null,
            type: grantAwardBlock?.grantAwardImageBlock?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: grantAwardBlock?.grantAwardImageBlock?.alt
              ? grantAwardBlock?.grantAwardImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!grantAwardBlock.callToActionLink && !!grantAwardBlock.callToAction
          }
          callToActionLink={grantAwardBlock.callToActionLink}
          callToActionType={
            grantAwardBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={grantAwardBlock.callToAction}
        >
          <PortableText value={grantAwardBlock.grantAwardTextBlock} />
        </ContentBlock>
        <ContentBlock
          heading={
            grantEligibilityBlock.grantEligibilityBlockHeading || undefined
          }
          showImage={
            grantEligibilityBlock?.grantEligibilityImageBlock?.asset
              ?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              grantEligibilityBlock?.grantEligibilityImageBlock?.asset
                ?.gatsbyImageData ?? null,
            type: grantEligibilityBlock?.grantEligibilityImageBlock?.asset
              ?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: grantEligibilityBlock?.grantEligibilityImageBlock?.alt
              ? grantEligibilityBlock?.grantEligibilityImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!grantEligibilityBlock.callToActionLink &&
            !!grantEligibilityBlock.callToAction
          }
          callToActionLink={grantEligibilityBlock.callToActionLink}
          callToActionType={
            grantEligibilityBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={grantEligibilityBlock.callToAction}
        >
          <PortableText
            value={grantEligibilityBlock.grantEligibilityTextBlock}
          />
        </ContentBlock>
        {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
      </LayoutContainer>
    </>
  );
}

export default GrantsPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<GrantPageQuery>) {
  const { name } = data.grantPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query GrantsPageQuery {
    grantPage: sanityPage(name: { eq: "Grants" }) {
      id
      name
      headingOne
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
      headingTwo
      grantImg: pageImageBlock {
        alt
        asset {
          gatsbyImageData
        }
        crop {
          bottom
          left
          right
          top
        }
        hotspot {
          height
          width
          x
          y
        }
      }
      grantTextBlock: _rawContent
      grantAwardBlock {
        grantAwardBlockHeading
        grantAwardTextBlock: _rawGrantAwardTextBlock
        callToAction
        callToActionLink
        grantAwardImageBlock {
          alt
          asset {
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
      grantEligibilityBlock {
        grantEligibilityBlockHeading
        grantEligibilityTextBlock: _rawGrantEligibilityTextBlock
        callToAction
        callToActionLink
        grantEligibilityImageBlock {
          alt
          asset {
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
      hasGallery
      galleryManyBlock {
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
    }
  }
`;
