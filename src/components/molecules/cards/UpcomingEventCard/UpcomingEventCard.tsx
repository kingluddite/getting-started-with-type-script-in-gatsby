import React from 'react';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';

// components
import Tag from '@components/atoms/tags/Tag';
import TextContent from './TextContent';

// images
import DefaultThumbnailImage from '@components/atoms/images/DefaultThumbnailImage';

// styles
import {
  StyledContentContainer,
  StyledPostCardImg,
  StyledUpcomingEventCardContainer,
} from './styles';

// types
import { UpcomingEventCardProps } from './types';

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({
  type,
  to,
  image,
  altText,
  // date,
  tagText,
  title,
  description,
  eventTag,
}) => {
  return (
    <StyledUpcomingEventCardContainer to={to} type={type}>
      <StyledContentContainer>
        <Tag
          type="primary"
          text={eventTag === `This Month` ? `This Month` : tagText}
          color={eventTag === `This Month` ? undefined : `grey`}
        />
        <TextContent
          type={type}
          heading={title}
          excerpt={description}
          charLimitHeading={37}
          charLimitExcerpt={54}
        />
      </StyledContentContainer>
      {image ? (
        <StyledPostCardImg
          image={getImage(image) as IGatsbyImageData}
          alt={altText}
        />
      ) : (
        <DefaultThumbnailImage
          height={134}
          width={200}
          borderRadius="var(--radius-md)"
        />
      )}
    </StyledUpcomingEventCardContainer>
  );
};

export default UpcomingEventCard;
