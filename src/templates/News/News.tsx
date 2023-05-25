// npm
import { graphql } from 'gatsby';
import React from 'react';
import { PortableText } from '@portabletext/react';

// components
import SEO from '@components/shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import ImageContainer from '@components/atoms/images/ImageContainer';
import Button from '@components/atoms/buttons/Button';
import LayoutContainer from '@components/shared/layout/LayoutContainer';
import ContentBlock from '@components/molecules/ContentBlock';

// styles
import { StyledSection } from './styles';

// types
import { SingleNewsPageProps } from './types';

const SingleNewsPage: React.FC<SingleNewsPageProps> = ({ data }) => {
  const {
    newsPostTitle,
    newsPostImg,
    publishDate,
    // newsTag,
    newsSinglePageTextBlock,
  } = data.newsSinglePage;
  return (
    <>
      <SEO title={newsPostTitle} />
      <HeroHeading>
        <h1>{newsPostTitle}</h1>
        {newsPostImg ? (
          <ImageContainer
            image={newsPostImg?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={newsPostImg?.alt ? newsPostImg.alt : ``}
          />
        ) : null}
        <p>{publishDate}</p>
        <div
          style={{
            display: `flex`,
            gap: `var(--size-dual-nudge)`,
          }}
        >
          <Button theme="outline" actionType="internal" link="/news">
            All News
          </Button>
        </div>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <StyledSection>
          <ContentBlock>
            <PortableText value={newsSinglePageTextBlock} />
          </ContentBlock>
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default SingleNewsPage;

export const query = graphql`
  query ($slug: String!) {
    newsSinglePage: sanityNews(slug: { current: { eq: $slug } }) {
      id
      newsTag
      newsPostTitle
      publishDate(formatString: "LL")
      newsPostImg: pageImageBlock {
        alt
        asset {
          gatsbyImageData
        }
      }
      newsSinglePageTextBlock: _rawContent
    }
  }
`;
