// npm
import { graphql } from 'gatsby';
import React from 'react';
import { PortableText } from '@portabletext/react';

// components
import HeroHeading from '@components/molecules/HeroHeading';
import ContentBlock from '@components/molecules/ContentBlock';
import SEO from '@components/shared/SEO';
import Button from '@components/atoms/buttons/Button';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';

// styles
import { StyledSection } from './styles';

// types
import { EventSinglePageProps } from './types';

function SingleEventPage({ data }: EventSinglePageProps) {
  const { eventDate, eventTitle, eventText, eventImg } = data.eventSinglePage;
  return (
    <>
      <SEO title={eventTitle} />
      <HeroHeading>
        <h1>{eventTitle}</h1>
        {eventImg ? (
          <ImageContainer
            image={eventImg?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={eventImg?.alt ? eventImg.alt : ``}
          />
        ) : null}
        <p>{eventDate}</p>
        <Button theme="outline" actionType="internal" link="/events">
          All Events
        </Button>
      </HeroHeading>
      <div className="container container--section-gap">
        <StyledSection>
          <ContentBlock>
            <PortableText value={eventText} />
          </ContentBlock>
        </StyledSection>
      </div>
    </>
  );
}

export default SingleEventPage;

export const query = graphql`
  query ($slug: String!) {
    eventSinglePage: sanityEventBlog(slug: { current: { eq: $slug } }) {
      id
      eventDate(formatString: "LL")
      eventTitle
      eventText: _rawEventContent
      eventImg: eventImageBlock {
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
          width
          height
          y
          x
        }
      }
    }
  }
`;
