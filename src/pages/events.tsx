import React from 'react';
import { PageProps, graphql } from 'gatsby';
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
// styles

type DataType = {
  eventsPage: {
    subheading: string;
  };
};

const EventsPage = ({ data }: PageProps<DataType>) => {
  const { subheading } = data.eventsPage;
  return (
    <>
      <HeroHeading>
        <Logo />
        <p>{subheading}</p>
      </HeroHeading>
    </>
  );
};

export const query = graphql`
  query EventsPageQuery {
    eventsPage: sanityPage(name: { eq: "Events" }) {
      id
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
    eventBlogs: allSanityEventBlog(
      filter: { eventDate: {} }
      sort: { eventDate: ASC }
    ) {
      totalCount
      nodes {
        id
        eventTitle
        eventExcerpt
        eventDate(formatString: "LL")
        slug {
          current
        }
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
            y
            x
            width
            height
          }
        }
      }
    }
  }
`;

export default EventsPage;
