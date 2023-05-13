// npm
import React from 'react';
import { compareAsc } from 'date-fns';

// components
import PostCard from '@components/molecules/cards/PostCard';

// styles
import { StyledPostContainer } from './styles';

// types
import { EventPostListProps } from './types';

// Defining the EventPostList component
const EventPostList: React.FC<EventPostListProps> = ({ eventBlogs }) => {
  // Creating a local variable for easier access to the nodes array
  const eventsArr = eventBlogs.nodes;

  // Rendering the component
  return (
    <StyledPostContainer>
      {/* Checking if eventsArr exists and has a filter method */}
      {eventsArr &&
        eventsArr.filter &&
        // Filtering events that already happened
        eventsArr
          .filter((e) => compareAsc(new Date(e.eventDate), new Date()) >= 0)
          // Rendering PostCard component for each event that passed the filter
          .map((l) => (
            <PostCard
              key={l.id}
              image={l?.eventImg?.asset?.gatsbyImageData}
              altText={l?.eventImg?.alt || ``}
              tagText="Event"
              type="event"
              date={l.eventDate}
              to={`events/${l.slug.current}`}
              title={l.eventTitle}
            />
          ))}
    </StyledPostContainer>
  );
};

export default EventPostList;
