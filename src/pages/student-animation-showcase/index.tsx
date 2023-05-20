// npm
import React from 'react';
import { graphql } from 'gatsby';
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
import { StyledSection } from './styles';
// import Gallery from '../components/atoms/Gallery';

function StudentAnimationShowcasePage({ data }) {
  console.log(data);
  const {
    name,
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
      <SEO title={name} />
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
            showCallToAction="true"
            callToActionLink="https://form.jotform.com/230654188700152"
            callToActionType="external"
            callToActionTitle="2023 Student Animation Showcase Submission Form"
          >
            <h2>Submissions now open for Student Animation Showcase 2023</h2>
            <div style={{ fontWeight: `bold`, fontSize: `18px` }}>
              To participate in the 2023 Student Animation Showcase please click
              on the button below:
            </div>
          </ContentBlock>
        </StyledSection>
        <StyledSection>
          <ContentBlock
            heading={headingTwo}
            showImage={false}
            showCallToAction={false}
            callToActionLink={false}
            callToActionTitle={false}
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
}

export default StudentAnimationShowcasePage;

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
