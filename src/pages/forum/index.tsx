// npm
import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import SEO from '@shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import LayoutContainer from '@shared/layout/LayoutContainer';
import Logo from '@components/atoms/Logo';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';
import Gallery from '@components/atoms/images/Gallery';

// styles
import { StyledFAQ } from './styles';

// types
import { ForumPageQuery } from './types';

function ForumPage({ data }: { data: ForumPageQuery }) {
  const {
    // name,
    headingOne,
    subheading,
    // content,
    // headingTwo,
    // whoWeAreImg,
    // whoWeAreTextBlock,
    howToJoinBlock,
    whatYouGetBlock,
    howToGetInvolvedBlock,
    faqManyHeading,
    faqManyBlock,
    galleryManyBlock,
    hasGallery,
    pageImageBlock,
  } = data.forumPage;

  return (
    <>
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        {/* <h2>{headingTwo}</h2> */}
        {pageImageBlock?.asset?.gatsbyImageData ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
        {/* <PortableText value={content} /> */}
      </HeroHeading>

      <LayoutContainer hasSectionGaps>
        <ContentBlock
          heading={howToJoinBlock.howToJoinHeading || undefined}
          showImage={
            howToJoinBlock?.howToJoinImageBlock?.asset?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              howToJoinBlock?.howToJoinImageBlock?.asset?.gatsbyImageData ??
              null,
            type: howToJoinBlock?.howToJoinImageBlock?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: howToJoinBlock?.howToJoinImageBlock?.alt
              ? howToJoinBlock?.howToJoinImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!howToJoinBlock.callToActionLink && !!howToJoinBlock.callToAction
          }
          callToActionLink={howToJoinBlock.callToActionLink}
          callToActionType={
            howToJoinBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={howToJoinBlock.callToAction}
        >
          <PortableText value={howToJoinBlock.howToJoinTextBlock} />
        </ContentBlock>

        {/* <StyledCallout
          href={discordBlock.callToActionLink}
          target="_blank"
          aria-label="AEF Discord"
        >
          <div className="content">
            <h3>{discordBlock.callToAction}</h3>
            <PortableText value={discordBlock.discordTextBlock} />
          </div>
          <div className="arrow">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </StyledCallout> */}

        <ContentBlock
          heading={whatYouGetBlock.whatYouGetHeading || undefined}
          showImage={
            whatYouGetBlock?.whatYouGetImageBlock?.asset?.gatsbyImageData ??
            false
          }
          imageProps={{
            image:
              whatYouGetBlock?.whatYouGetImageBlock?.asset?.gatsbyImageData ??
              null,
            type: whatYouGetBlock?.whatYouGetImageBlock?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: whatYouGetBlock?.whatYouGetImageBlock?.alt
              ? whatYouGetBlock?.whatYouGetImageBlock.alt
              : ``,
          }}
          showCallToAction
          callToActionLink={whatYouGetBlock.callToActionLink}
          callToActionType={
            whatYouGetBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={whatYouGetBlock.callToAction}
        >
          <PortableText value={whatYouGetBlock.whatYouGetTextBlock} />
        </ContentBlock>

        <ContentBlock
          heading={howToGetInvolvedBlock.howToGetInvolvedHeading || undefined}
          showImage={
            howToGetInvolvedBlock?.howToGetInvolvedImageBlock?.asset
              ?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              howToGetInvolvedBlock?.howToGetInvolvedImageBlock?.asset
                ?.gatsbyImageData ?? null,
            type: howToGetInvolvedBlock?.howToGetInvolvedImageBlock?.asset
              ?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: howToGetInvolvedBlock?.howToGetInvolvedImageBlock?.alt
              ? howToGetInvolvedBlock?.howToGetInvolvedImageBlock.alt
              : ``,
          }}
          showCallToAction
          callToActionLink={howToGetInvolvedBlock.callToActionLink}
          callToActionType={
            howToGetInvolvedBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={howToGetInvolvedBlock.callToAction}
        >
          <PortableText
            value={howToGetInvolvedBlock.howToGetInvolvedTextBlock}
          />
        </ContentBlock>

        <ContentBlock heading={faqManyHeading || undefined}>
          <StyledFAQ>
            {faqManyBlock.map((f) => (
              <li key={f.id}>
                <h3>{f.faqQuestion}</h3>
                <p>{f.faqAnswer}</p>
              </li>
            ))}
          </StyledFAQ>
        </ContentBlock>

        {hasGallery ? <Gallery images={galleryManyBlock} /> : null}
      </LayoutContainer>
    </>
  );
}

export default ForumPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<ForumPageQuery>) {
  const { name } = data.forumPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query ForumPageQuery {
    forumPage: sanityPage(name: { eq: "Forum" }) {
      name
      headingOne
      subheading
      # content {
      #   children {
      #     text
      #   }
      # }
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
      whoWeAreImg: pageImageBlock {
        alt
        asset {
          gatsbyImageData
        }
      }
      whoWeAreTextBlock: _rawContent
      howToJoinBlock {
        howToJoinHeading
        howToJoinTextBlock: _rawHowToJoinTextBlock
        callToAction
        callToActionLink
        howToJoinImageBlock {
          alt
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
          asset {
            gatsbyImageData
          }
        }
      }
      whatYouGetBlock {
        whatYouGetHeading
        whatYouGetTextBlock: _rawWhatYouGetTextBlock
        callToAction
        callToActionLink
        whatYouGetImageBlock {
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
      howToGetInvolvedBlock {
        howToGetInvolvedHeading
        howToGetInvolvedTextBlock: _rawHowToGetInvolvedTextBlock
        callToAction
        callToActionLink
        howToGetInvolvedImageBlock {
          alt
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
          asset {
            gatsbyImageData
          }
        }
      }
      faqManyHeading
      faqManyBlock {
        id
        faqQuestion
        faqAnswer
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
