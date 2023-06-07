import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getImage } from 'gatsby-plugin-image';
import DefaultThumbnailImage from '@components/atoms/images/DefaultThumbnailImage';
import Tag from '@components/atoms/tags/Tag';
import truncateText from '@utils/truncateText/truncateText';
import {
  StyledContentContainer,
  StyledFontAwesomeIcon,
  StyledPostCardContainer,
  StyledPostCardImg,
} from './styles';
import { StyledMetaContainer } from '@components/atoms/MetaContent/styles';

import {
  StyledTextContainer,
  StyledTextHeading,
} from '@components/atoms/TextContent/styles';

export default function PostCard({
  type,
  to,
  image,
  altText,
  date,
  tagText,
  title,
  description,
  isOnHomePage,
}) {
  return (
    <StyledPostCardContainer to={to} $type={type}>
      {type !== `tomsBlog` &&
        (image ? (
          <StyledPostCardImg
            image={getImage(image)}
            // used GatsbyImage docs to override this default value and show nice looking image on news cards on home page
            objectFit="contain"
            alt={altText}
          />
        ) : (
          <DefaultThumbnailImage
            height={134}
            width={200}
            borderRadius="var(--radius-md)"
          />
        ))}
      <StyledContentContainer isOnHomePage={isOnHomePage}>
        {tagText && <MetaContent tag={tagText} date={date} />}
        <TextContent
          type={type}
          heading={title}
          excerpt={description}
          charLimitHeading={37}
          charLimitExcerpt={54}
          isOnHomePage={isOnHomePage}
        />
      </StyledContentContainer>
      <StyledFontAwesomeIcon className="minor-icon-right" icon={faAngleRight} />
    </StyledPostCardContainer>
  );
}

function MetaContent({ tag, date }) {
  return (
    <StyledMetaContainer>
      <Tag type="primary" text={tag} color="var(--c-yellow-1)" />
      <time dateTime={date}>{date}</time>
    </StyledMetaContainer>
  );
}

function TextContent({
  type,
  heading,
  excerpt,
  charLimitHeading,
  charLimitExcerpt,
  isOnHomePage,
}) {
  switch (type) {
    case `news`:
      return (
        <StyledTextContainer>
          <StyledTextHeading title={heading}>
            {truncateText(charLimitHeading, heading)}
          </StyledTextHeading>
          {!isOnHomePage && (
            <p title={excerpt}>{truncateText(charLimitExcerpt, excerpt)}</p>
          )}
          {/* <p className="read-more-excerpt">(READ MORE)</p> */}
        </StyledTextContainer>
      );
    default:
      return (
        <StyledTextContainer $type={type}>
          <StyledTextHeading $type={type} title={heading}>
            {truncateText(charLimitHeading, heading)}
          </StyledTextHeading>
          <p title={excerpt}>{truncateText(charLimitExcerpt, excerpt)}</p>
        </StyledTextContainer>
      );
  }
}
