import React from 'react';
import { PageProps, HeadProps, graphql } from 'gatsby';

// components
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
import SEO from '@components/shared/SEO';

// styles
import { StyledSection, StyledSectionTitle } from './styles/AboutStyles';
import ImageContainer from '@components/atoms/images/ImageContainer';
import LayoutContainer from '@components/shared/layout/LayoutContainer';
import Gallery from '@components/atoms/images/Gallery';
import ContentBlock from '@components/molecules/ContentBlock';
import BoardMemberCard from '@components/molecules/cards/BoardMemberCard';

type AboutPageQueryData = {
  aboutPage: {
    name: string;
    headingOne: string;
    subheading: string;
    headingTwo: string;
    whoWeAreImg: {
      asset: {
        gatsbyImageData: any;
      };
      alt: string;
    };
    missionTextBlock: string;
    quoteManyBlock: Array<{
      id: string;
      quoteContent: string;
      quoteAuthor: string;
    }>;
    boardMemberManyHeading: string;
    boardMemberBlock: Array<{
      bioImg: {
        asset: {
          gatsbyImageData: any;
        };
        alt: string;
      };
      bioHeading: string;
      callToAction: string;
      callToActionLink: string;
      id: string;
      fullName: string;
      jobTitle: string;
      expertise: string;
      bioTextBlock: string;
    }>;
    galleryManyBlock: {
      id: string;
      alt?: string;
      asset: {
        id: string;
        gatsbyImageData: any;
      };
      crop: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
      hotspot: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
    }[];
    hasGallery: boolean;
    pageImageBlock: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any;
      };
      hotspot: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
      crop: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
    };
  };
};

const AboutPage: React.FC<PageProps<AboutPageQueryData>> = ({ data }) => {
  const {
    name,
    headingOne,
    subheading,
    // headingTwo,
    // whoWeAreImg,
    // missionTextBlock,
    quoteManyBlock,
    boardMemberManyHeading,
    boardMemberBlock,
    galleryManyBlock,
    hasGallery,
    pageImageBlock,
  } = data.aboutPage;

  return (
    <>
      <SEO title={name} />
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        {pageImageBlock?.asset?.gatsbyImageData ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
        <p>{subheading}</p>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <StyledSection>
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
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>{boardMemberManyHeading}</StyledSectionTitle>
          {boardMemberBlock.map((b) => (
            <BoardMemberCard key={b.id} data={b} />
          ))}
        </StyledSection>
        <StyledSection>
          {hasGallery ? <Gallery images={galleryManyBlock} /> : null}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export const query = graphql`
  query AboutPageQuery {
    aboutPage: sanityPage(name: { eq: "About" }) {
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
      headingTwo
      whoWeAreImg: pageImageBlock {
        asset {
          gatsbyImageData
        }
        alt
      }
      missionTextBlock: _rawContent
      boardMemberManyHeading
      boardMemberBlock {
        bioImg: pageImageBlock {
          alt
          asset {
            gatsbyImageData(aspectRatio: 1, width: 128, height: 128)
          }
          hotspot {
            x
            y
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
        bioHeading
        callToAction
        callToActionLink
        id
        fullName
        jobTitle
        expertise
        bioTextBlock: _rawContent
      }
      quoteManyBlock {
        id
        quoteContent
        quoteAuthor
      }
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

export default AboutPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<AboutPageQueryData>) {
  const { name } = data.aboutPage;
  return <SEO title={name}></SEO>;
}
