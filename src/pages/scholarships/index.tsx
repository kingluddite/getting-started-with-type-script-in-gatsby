// npm
import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { HeadProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import SEO from '@shared/SEO';
import Button from '@components/atoms/buttons/Button';
import Logo from '@components/atoms/Logo';

// images
import Gallery from '@components/atoms/images/Gallery';
import LayoutContainer from '@shared/layout/LayoutContainer';
import ImageContainer from '@components/atoms/images/ImageContainer';

// types
import { ScholarshipsPageQuery } from './types';
import { StyledSection } from '@pages/home/styles';

function StudentScholarshipPage({ data }: { data: ScholarshipsPageQuery }) {
  const {
    headingOne,
    subheading,
    headingOneButtonText,
    headingOneButtonPath,
    headingTwo,
    scholarshipImg,
    quoteManyBlock,
    scholarshipTextBlock,
    scholarshipCriteriaBlock,
    scholarshipEligibilityBlock,
    scholarshipAppRequirementBlock,
    scholarshipSelectionBlock,
    scholarshipRequirementForStudentBlock,
    galleryManyBlock,
    hasGallery,
    pageImageBlock,
  } = data.scholarshipPage;

  return (
    <>
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        <Button actionType="external" link={headingOneButtonPath}>
          {headingOneButtonText}
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
        {quoteManyBlock && (
          <ContentBlock>
            {quoteManyBlock.map((q) => (
              <div key={q.id} style={{ textAlign: `center` }}>
                <p>
                  <em>{q.quoteContent}</em>
                </p>
                <p>
                  <strong> &#8211; {q.quoteAuthor}</strong>
                </p>
              </div>
            ))}
          </ContentBlock>
        )}
        <ContentBlock
          heading={headingTwo || undefined}
          showImage={false}
          imageProps={
            scholarshipImg?.asset?.gatsbyImageData && {
              image: scholarshipImg?.asset?.gatsbyImageData,
              type: `dynamic`,
              alt: scholarshipImg?.alt ? scholarshipImg.alt : ``,
            }
          }
        >
          <PortableText value={scholarshipTextBlock} />
        </ContentBlock>
        <ContentBlock
          heading={
            scholarshipCriteriaBlock.scholarshipCriteriaBlockHeading ||
            undefined
          }
          showImage={
            !!scholarshipCriteriaBlock?.scholarshipCriteriaImageBlock?.asset
              ?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              scholarshipCriteriaBlock?.scholarshipCriteriaImageBlock?.asset
                ?.gatsbyImageData ?? null,
            type: scholarshipCriteriaBlock?.scholarshipCriteriaImageBlock?.asset
              ?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: scholarshipCriteriaBlock?.scholarshipCriteriaImageBlock?.alt
              ? scholarshipCriteriaBlock?.scholarshipCriteriaImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!(
              scholarshipCriteriaBlock.callToActionLink &&
              scholarshipCriteriaBlock.callToAction
            )
          }
          callToActionLink={scholarshipCriteriaBlock.callToActionLink}
          callToActionType={
            scholarshipCriteriaBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={scholarshipCriteriaBlock.callToAction}
        >
          <PortableText
            value={scholarshipCriteriaBlock.scholarshipCriteriaTextBlock}
          />
        </ContentBlock>
        <ContentBlock
          heading={
            scholarshipEligibilityBlock.scholarshipEligibilityBlockHeading ||
            undefined
          }
          showImage={
            !!scholarshipEligibilityBlock?.scholarshipEligibilityImageBlock
              ?.asset?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              scholarshipEligibilityBlock?.scholarshipEligibilityImageBlock
                ?.asset?.gatsbyImageData ?? null,
            type: scholarshipEligibilityBlock?.scholarshipEligibilityImageBlock
              ?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: scholarshipEligibilityBlock?.scholarshipEligibilityImageBlock
              ?.alt
              ? scholarshipEligibilityBlock?.scholarshipEligibilityImageBlock
                  .alt
              : ``,
          }}
          showCallToAction={
            !!(
              scholarshipEligibilityBlock.callToActionLink &&
              scholarshipEligibilityBlock.callToAction
            )
          }
          callToActionLink={scholarshipEligibilityBlock.callToActionLink}
          callToActionType={
            scholarshipEligibilityBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={scholarshipEligibilityBlock.callToAction}
        >
          <PortableText
            value={scholarshipEligibilityBlock.scholarshipEligibilityTextBlock}
          />
        </ContentBlock>
        <ContentBlock
          heading={
            scholarshipAppRequirementBlock.scholarshipAppRequirementBlockHeading ||
            undefined
          }
          showImage={
            !!scholarshipAppRequirementBlock
              ?.scholarshipAppRequirementImageBlock?.asset?.gatsbyImageData ??
            false
          }
          imageProps={{
            image:
              scholarshipAppRequirementBlock
                ?.scholarshipAppRequirementImageBlock?.asset?.gatsbyImageData ??
              null,
            type: scholarshipAppRequirementBlock
              ?.scholarshipAppRequirementImageBlock?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: scholarshipAppRequirementBlock
              ?.scholarshipAppRequirementImageBlock?.alt
              ? scholarshipAppRequirementBlock
                  ?.scholarshipAppRequirementImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!(
              scholarshipAppRequirementBlock.callToActionLink &&
              scholarshipAppRequirementBlock.callToAction
            )
          }
          callToActionLink={scholarshipAppRequirementBlock.callToActionLink}
          callToActionType={
            scholarshipAppRequirementBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={scholarshipAppRequirementBlock.callToAction}
        >
          <PortableText
            value={
              scholarshipAppRequirementBlock.scholarshipAppRequirementTextBlock
            }
          />
        </ContentBlock>
        <ContentBlock
          heading={
            scholarshipSelectionBlock.scholarshipSelectionProcessBlockHeading ||
            undefined
          }
          showImage={
            !!scholarshipSelectionBlock?.scholarshipSelectionImageBlock?.asset
              ?.gatsbyImageData || false
          }
          imageProps={{
            image:
              scholarshipSelectionBlock?.scholarshipSelectionImageBlock?.asset
                ?.gatsbyImageData ?? null,
            type: scholarshipSelectionBlock?.scholarshipSelectionImageBlock
              ?.asset?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: scholarshipSelectionBlock?.scholarshipSelectionImageBlock?.alt
              ? scholarshipSelectionBlock?.scholarshipSelectionImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!(
              scholarshipSelectionBlock.callToActionLink &&
              scholarshipSelectionBlock.callToAction
            )
          }
          callToActionLink={scholarshipSelectionBlock.callToActionLink}
          callToActionType={
            scholarshipSelectionBlock?.callToActionLink?.includes(`http`)
              ? `external`
              : `internal`
          }
          callToActionTitle={scholarshipSelectionBlock.callToAction}
        >
          <PortableText
            value={
              scholarshipSelectionBlock.scholarshipSelectionProcessTextBlock
            }
          />
        </ContentBlock>
        <ContentBlock
          heading={
            scholarshipRequirementForStudentBlock?.scholarshipRequirementForStudentBlockHeading ||
            undefined
          }
          showImage={
            !!scholarshipRequirementForStudentBlock
              ?.scholarshipRequirementForStudentImageBlock?.asset
              ?.gatsbyImageData ?? false
          }
          imageProps={{
            image:
              scholarshipRequirementForStudentBlock
                ?.scholarshipRequirementForStudentImageBlock?.asset
                ?.gatsbyImageData ?? null,
            type: scholarshipRequirementForStudentBlock
              ?.scholarshipRequirementForStudentImageBlock?.asset
              ?.gatsbyImageData
              ? `dynamic`
              : `static`,
            alt: scholarshipRequirementForStudentBlock
              ?.scholarshipRequirementForStudentImageBlock?.alt
              ? scholarshipRequirementForStudentBlock
                  ?.scholarshipRequirementForStudentImageBlock.alt
              : ``,
          }}
          showCallToAction={
            !!scholarshipRequirementForStudentBlock?.callToActionLink &&
            !!scholarshipRequirementForStudentBlock?.callToAction
          }
          callToActionLink={
            scholarshipRequirementForStudentBlock?.callToActionLink || ``
          }
          callToActionType={
            scholarshipRequirementForStudentBlock?.callToActionLink?.includes(
              `http`,
            )
              ? `external`
              : `internal`
          }
          callToActionTitle={
            scholarshipRequirementForStudentBlock?.callToAction || ``
          }
        >
          {scholarshipRequirementForStudentBlock && (
            <PortableText
              value={
                scholarshipRequirementForStudentBlock.scholarshipRequirementForStudentTextBlock
              }
            />
          )}
        </ContentBlock>
        <StyledSection>
          {hasGallery ? <Gallery images={galleryManyBlock} /> : null}
        </StyledSection>
      </LayoutContainer>
    </>
  );
}

export default StudentScholarshipPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<ScholarshipsPageQuery>) {
  const { name } = data.scholarshipPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query ScholarshipPageQuery {
    scholarshipPage: sanityPage(name: { eq: "Scholarship" }) {
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
      scholarshipTextBlock: _rawContent
      headingOneButtonText
      headingOneButtonPath
      headingTwo
      scholarshipImg: pageImageBlock {
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
          y
          x
          width
          height
        }
      }
      scholarshipCriteriaBlock {
        scholarshipCriteriaTextBlock: _rawScholarshipCriteriaTextBlock
        scholarshipCriteriaBlockHeading
        callToAction
        callToActionLink
        scholarshipCriteriaImageBlock {
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
      scholarshipEligibilityBlock {
        scholarshipEligibilityBlockHeading
        scholarshipEligibilityTextBlock: _rawScholarshiopEligibilityTextBlock
        callToAction
        callToActionLink
        scholarshipEligibilityImageBlock {
          alt
          asset {
            gatsbyImageData
          }
          crop {
            top
            right
            bottom
            left
          }
          hotspot {
            y
            x
            width
            height
          }
        }
      }
      scholarshipAppRequirementBlock {
        scholarshipAppRequirementBlockHeading
        scholarshipAppRequirementTextBlock: _rawScholarshipAppRequirementTextBlock
        callToAction
        callToActionLink
        scholarshipAppRequiementImageBlock {
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
      scholarshipSelectionBlock {
        scholarshipSelectionProcessBlockHeading
        scholarshipSelectionProcessTextBlock: _rawScholarshipSelectionProcessTextBlock
        callToAction
        callToActionLink
        scholarshipSelectionImageBlock {
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
      scholarshipRequirementForStudentBlock {
        scholarshipRequirementForStudentBlockHeading
        scholarshipRequirementForStudentTextBlock: _rawScholarshipRequirementForStudentTextBlock
        callToAction
        callToActionLink
        scholarshipRequirementForStudentImageBlock {
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
      quoteManyBlock {
        id
        quoteContent
        quoteAuthor
      }
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
