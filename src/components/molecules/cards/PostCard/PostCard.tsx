import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getImage } from 'gatsby-plugin-image';

// components
import MetaContent from '../../../atoms/MetaContent/MetaContent';
import TextContent from '../../../atoms/TextContent/TextContent';

// images
import DefaultThumbnailImage from '../../../atoms/images/DefaultThumbnailImage';

// styles
import {
  StyledPostCardContainer,
  StyledPostCardImg,
  StyledFontAwesomeIcon,
} from './styles';
import { StyledContentContainer } from '../CardContent/styles';

// types
import { PostCardProps } from './types';

function PostCard({
  type,
  to,
  image,
  altText,
  date,
  tagText,
  title,
  description,
}: PostCardProps) {
  // Create a new Date object from the date string
  const dateObj = new Date(date);

  const postImage = getImage(image);

  if (!postImage) {
    return null; // or return a placeholder image
  }

  return (
    <StyledPostCardContainer to={to} $type={type}>
      {/* Use a fragment to conditionally render the image */}
      {type !== `tomsBlog` && (
        <>
          {image ? (
            <StyledPostCardImg
              // Use Gatsby's getImage function to get the optimized image
              image={postImage}
              // Set the height, width, and border radius inline
              style={{
                height: 134,
                width: 200,
                borderRadius: `var(--radius-md)`,
              }}
              // Use objectFit="contain" to fit the image inside the container
              objectFit="contain"
              alt={altText || ``}
            />
          ) : (
            <DefaultThumbnailImage
              height={134}
              width={200}
              borderRadius="var(--radius-md)"
            />
          )}
        </>
      )}
      <StyledContentContainer>
        {/* Pass the date object to the MetaContent component */}
        {tagText && <MetaContent tag={tagText} date={dateObj} />}
        <TextContent
          type={type}
          heading={title}
          excerpt={description}
          charLimitHeading={37}
          charLimitExcerpt={54}
        />
      </StyledContentContainer>
      <StyledFontAwesomeIcon className="minor-icon-right" icon={faAngleRight} />
    </StyledPostCardContainer>
  );
}

export default PostCard;
