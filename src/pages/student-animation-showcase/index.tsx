// npm
import React from 'react';
import { HeadProps, PageProps, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import SEO from '@shared/SEO';
import LayoutContainer from '@shared/layout/LayoutContainer';
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import Logo from '@components/atoms/Logo';
import Button from '@components/atoms/buttons/Button';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';

// styles
import { StyledSection } from './styles';

// images
// import Gallery from '../components/atoms/Gallery';

// types
import { SASPageQuery } from './types';

const StudentAnimationShowcasePage: React.FC<PageProps<SASPageQuery>> = ({
  data,
}) => {
  const {
    // name,
    headingOne,
    headingOneButtonPath,
    headingOneButtonText,
    subheading,
    headingTwo,
    // whoWeAreImg,
    // missionTextBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
    sasTextBlock,
  } = data.sasPage;

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
        <Button theme="major" actionType="external" link={headingOneButtonPath}>
          {headingOneButtonText}
        </Button>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <StyledSection>
          <ContentBlock
            showCallToAction={true}
            callToActionLink="https://form.jotform.com/230654188700152"
            callToActionType="external"
            callToActionTitle="2023 Student Animation Showcase Submission Form"
          >
            <h2>
              Deadline for Student Animation Showcase Submissions is June 12th,
              2023
            </h2>
            <div style={{ fontWeight: `bold`, fontSize: `18px` }}>
              Please follow all the instructions to submit your materials for
              the 2023 Student Animation Showcase by clicking on the button
              below:
            </div>
          </ContentBlock>
        </StyledSection>
        <StyledSection>
          <ContentBlock
            heading={headingTwo}
            showImage={false}
            showCallToAction={false}
            callToActionLink=""
            callToActionTitle=""
            callToActionType="external"
          >
            <PortableText value={sasTextBlock} />
          </ContentBlock>
        </StyledSection>
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default StudentAnimationShowcasePage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<SASPageQuery>) {
  const { name } = data.sasPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query SasPageQuery {
    sasPage: sanityPage(name: { eq: "Student Animation Showcase" }) {
      name
      headingOne
      subheading
      headingOneButtonPath
      headingOneButtonText
      headingTwo
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
      hasGallery
      sasTextBlock: _rawContent
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
