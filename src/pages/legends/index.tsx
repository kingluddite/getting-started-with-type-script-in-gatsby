// npm
import React from 'react';
import { HeadProps, graphql } from 'gatsby';

// components
import SEO from '@shared/SEO';
import LayoutContainer from '@shared/layout/LayoutContainer';
import LegendCard from '@cards/LegendCard';
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import Logo from '@components/atoms/Logo';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';
// import Gallery from '../components/atoms/Gallery';

// styles
import { StyledLegendGrid, StyledSection } from './styles';

// types
import { LegendsPageQuery } from './types';

function LegendsPage({ data }: { data: LegendsPageQuery }) {
  const {
    // name,
    headingOne,
    subheading,
    quoteManyBlock,
    legendBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.legendsPage;

  return (
    <div>
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
      <LayoutContainer hasSectionGaps>
        <StyledLegendGrid>
          {legendBlock.map((l) => (
            <LegendCard key={l.id} data={l} />
          ))}
        </StyledLegendGrid>
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
          <ContentBlock
            showCallToAction={true}
            callToActionLink="/contact"
            callToActionType="internal"
            callToActionTitle="Share Your Suggestion for Hall of Fame Educator"
          >
            <div style={{ fontWeight: `bold`, fontSize: `18px` }}>
              AEF will announce the names of ten more educators next year, and
              every year thereafter. It you wish to suggest a worthy candidate
              please click on the button below:
            </div>
          </ContentBlock>
        </StyledSection>
      </LayoutContainer>
    </div>
  );
}

export default LegendsPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<LegendsPageQuery>) {
  const { name } = data.legendsPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query LegendsPageQuery {
    legendsPage: sanityPage(name: { eq: "Legends" }) {
      name
      headingOne
      subheading
      quoteManyBlock {
        id
        quoteContent
        quoteAuthor
      }
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
      legendBlock {
        id
        fullName
        expertise
        callToActionLink
        callToAction
        legendImg: pageImageBlock {
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
