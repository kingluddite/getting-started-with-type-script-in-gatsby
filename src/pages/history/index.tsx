// npm
import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';

// components
import LayoutContainer from '@shared/layout/LayoutContainer';
import SEO from '@shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
// import YearBlock from '@components/atoms/YearBlock';
// import Gallery from '@components/atoms/Gallery';
import Logo from '@components/atoms/Logo';
import ImageContainer from '@components/atoms/images/ImageContainer';

// styles
import { StyledSection } from './styles';

// types
import { HistoryPageProps } from './types';

const HistoryPage: React.FC<HistoryPageProps> = ({ data }) => {
  const {
    name,
    headingOne,
    subheading,
    // galleryManyBlock,
    // hasGallery,
    // headingTwo,
    // timelineImg,
    quoteManyBlock,
    timelineTextBlock,
    // timelineManyBlock,
    pageImageBlock,
  } = data.historyPage;
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
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
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
        <StyledSection>
          <ContentBlock>
            <PortableText value={timelineTextBlock} />
          </ContentBlock>
          <ContentBlock>
            {/* <StyledTimeline>
              {timelineManyBlock
                .sort((a, b) => a.yearOfEvent - b.yearOfEvent)
                .map((t) => (
                  <YearBlock
                    key={t.id}
                    year={t.yearOfEvent}
                    text={t.eventDescription}
                  />
                ))}
            </StyledTimeline> */}
          </ContentBlock>
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default HistoryPage;

export const query = graphql`
  query HistoryPageQuery {
    historyPage: sanityPage(name: { eq: "History" }) {
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
      hasGallery
      quoteManyBlock {
        id
        quoteContent
        quoteAuthor
      }
      galleryManyBlock {
        alt
        hotspot {
          x
          y
          height
          width
        }
        crop {
          bottom
          left
          right
          top
        }
        asset {
          id
          gatsbyImageData
        }
      }
      timelineImg: pageImageBlock {
        alt
        asset {
          _id
          gatsbyImageData
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
      timelineTextBlock: _rawContent
      timelineManyBlock {
        yearOfEvent
        eventDescription
        id
      }
    }
  }
`;
