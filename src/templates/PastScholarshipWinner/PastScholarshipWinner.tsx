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
import { StyledSection } from './styles';
import ContentBlock from '@components/molecules/ContentBlock';
import { SinglePastWinnerPageProps } from './types';

const SinglePastWinnerPage: React.FC<SinglePastWinnerPageProps> = ({
  data,
}) => {
  const { pastWinnerTitle, pastWinnerImg, publishDate, pastWinnerTextBlock } =
    data.pastWinnerSinglePage;
  return (
    <>
      <SEO title={pastWinnerTitle} />
      <HeroHeading>
        <h1>{pastWinnerTitle}</h1>
        {pastWinnerImg ? (
          <ImageContainer
            image={pastWinnerImg?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pastWinnerImg?.alt ? pastWinnerImg.alt : ``}
          />
        ) : null}
        <p>{publishDate}</p>
        <div
          style={{
            display: `flex`,
            gap: `var(--size-dual-nudge)`,
          }}
        >
          <Button
            theme="outline"
            actionType="internal"
            link="/past-scholarship-winners"
          >
            All Past Scholarship Winners
          </Button>
        </div>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <StyledSection>
          <ContentBlock>
            <PortableText value={pastWinnerTextBlock} />
          </ContentBlock>
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default SinglePastWinnerPage;

export const query = graphql`
  query ($slug: String!) {
    pastWinnerSinglePage: sanityPastWinnerBlog(
      slug: { current: { eq: $slug } }
    ) {
      pastWinnerTitle
      publishDate(formatString: "LL")
      pastWinnerImg: pageImageBlock {
        alt
        asset {
          gatsbyImageData
        }
      }
      pastWinnerTextBlock: _rawPastWinnerContent
    }
  }
`;
