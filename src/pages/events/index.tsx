// npm
import React, { useCallback, useEffect, useState } from 'react';
import { HeadProps, graphql } from 'gatsby';
import { compareAsc, format } from 'date-fns';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// components
import SEO from '@shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
import UpcomingEventCard from '@components/molecules/cards/UpcomingEventCard';
import LayoutContainer from '@shared/layout/LayoutContainer';
import MediumCard from '@components/molecules/cards/MediumCard';
import CardGridContainer from '@components/molecules/cards/CardGridContainer/styles';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';
// import Gallery from '../components/atoms/Gallery';

// styles
import {
  StyledDivider,
  StyledEvent,
  StyledForm,
  StyledSearchIcon,
  StyledSection,
  StyledSectionTitle,
  StyledTimeline,
} from './styles';
import { StyledInput } from '@components/atoms/forms/FormInput/styles';

import { EventData, EventsPageQuery } from './types';

function EventsPage({ data }: { data: EventsPageQuery }) {
  const {
    headingOne,
    subheading,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.eventsPage;
  const [originalEvents, setOriginalEvents] = useState<EventData[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
  const [searchTerm, setSearchTerm] = useState(``);

  useEffect(() => {
    const items = data?.eventBlogs?.nodes || [];
    setOriginalEvents(items);
    setFilteredEvents(items);
  }, [data]);

  const searchEvents = useCallback(
    (term: string) => {
      if (!term.trim()) {
        setFilteredEvents(originalEvents);
      } else {
        const items = originalEvents.filter((event) =>
          event?.eventTitle
            ?.trim()
            .toLowerCase()
            .includes(term.trim().toLowerCase()),
        );
        setFilteredEvents(items);
      }
    },
    [originalEvents],
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchEvents(searchTerm);
    },
    [searchTerm, searchEvents],
  );

  const obj = filteredEvents
    .filter((e) => compareAsc(new Date(e.eventDate), new Date()) >= 0)
    .reduce((prev, curr) => {
      const year = new Date(curr.eventDate).getFullYear();
      const updatedEvents = [...(prev[year] || []), curr];
      return { ...prev, [year]: updatedEvents };
    }, {} as { [key: string]: EventData[] });

  const eventYears = Object.keys(obj).map((key) => ({
    year: key,
    events: obj[key],
  }));

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
        <StyledForm onSubmit={handleFormSubmit} role="search">
          <StyledInput
            id="searchInput"
            style={{
              background: `var(--c-white)`,
            }}
            placeholder="Search by Title"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search By Title"
          />
          <StyledSearchIcon icon={faSearch} />
        </StyledForm>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        <StyledSection>
          <StyledSectionTitle>Upcoming Events</StyledSectionTitle>
          {eventYears.length ? (
            eventYears.map((year) => (
              <React.Fragment key={year.year}>
                <StyledDivider>
                  <p>{year.year}</p>
                  <span />
                </StyledDivider>
                <StyledTimeline>
                  {year.events.map((e, index) => {
                    const tag =
                      new Date(e.eventDate).getMonth() === new Date().getMonth()
                        ? `This Month`
                        : `upcoming`;
                    return (
                      <StyledEvent key={index}>
                        <div className="timeline-date">
                          <div className="timeline-month">
                            {format(new Date(e.eventDate), `MMM`)}
                          </div>
                          <div className="timeline-day">
                            {format(new Date(e.eventDate), `dd`)}
                          </div>
                        </div>
                        <UpcomingEventCard
                          to={e.slug.current}
                          title={e.eventTitle}
                          tagText={e.eventDate}
                          description={e.eventExcerpt}
                          image={e.eventImg?.asset?.gatsbyImageData}
                          altText={e.eventImg?.alt ? e.eventImg.alt : ``}
                          eventTag={tag}
                        />
                      </StyledEvent>
                    );
                  })}
                </StyledTimeline>
              </React.Fragment>
            ))
          ) : (
            <h3>No current events found</h3>
          )}
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Past Events</StyledSectionTitle>
          {filteredEvents.filter(
            (e) => compareAsc(new Date(e.eventDate), new Date()) < 0,
          ).length ? (
            <CardGridContainer>
              {filteredEvents
                .filter(
                  (e) => compareAsc(new Date(e.eventDate), new Date()) < 0,
                )
                .filter((e, i) => i < 10)
                .map((e) => (
                  <MediumCard
                    key={e.id}
                    cardType="pastEvent"
                    to={e.slug.current}
                    title={e.eventTitle}
                    tagText={e.eventDate}
                    description={e.eventExcerpt}
                  />
                ))}
            </CardGridContainer>
          ) : (
            <h3>No past events found</h3>
          )}
        </StyledSection>
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
        </StyledSection>
      </LayoutContainer>
    </>
  );
}

export default EventsPage;

export function Head({ data }: HeadProps<EventsPageQuery>) {
  const { name } = data.eventsPage;
  return <SEO title={name}></SEO>;
}

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
