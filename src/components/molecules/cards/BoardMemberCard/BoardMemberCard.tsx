// npm
import React from 'react';
import { PortableText } from '@portabletext/react';

// components
import Button from '@components/atoms/buttons/Button';

// images
import DefaultThumbnailImage from '@components/atoms/images/DefaultThumbnailImage';

// styles
import {
  StyledBioContainer,
  StyledBoardCard,
  StyledGatsbyImage,
  StyledMetaContainer,
  StyledMetaText,
} from './styles';

// types
import type { BoardMemberCardProps } from './types';

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({
  data: {
    bioImg,
    fullName,
    expertise,
    callToAction,
    callToActionLink,
    jobTitle,
    bioTextBlock,
  },
}) => {
  return (
    <StyledBoardCard>
      <StyledMetaContainer>
        <div>
          {/* Render the member's image or a default thumbnail if not available */}
          {bioImg?.asset?.gatsbyImageData ? (
            <StyledGatsbyImage
              className="memberImage"
              image={bioImg.asset.gatsbyImageData}
              alt={bioImg.alt}
              imgStyle={{ borderRadius: `var(--radius-full)` }}
            />
          ) : (
            <DefaultThumbnailImage
              height={128}
              width={128}
              borderRadius="var(--radius-full)"
              className="default-image--center"
            />
          )}
          <StyledMetaText>
            <h3>{fullName}</h3>
            <h4 style={{ paddingBottom: `5px` }}>
              <em>{jobTitle}</em>
            </h4>
            <p>{expertise}</p>
          </StyledMetaText>
        </div>
        {/* Render a button if both callToAction and callToActionLink are available */}
        {callToAction && callToActionLink ? (
          <Button theme="minor" actionType="external" link={callToActionLink}>
            {callToAction}
          </Button>
        ) : null}
      </StyledMetaContainer>
      <StyledBioContainer>
        {/* Render the member's bio text */}
        <PortableText value={bioTextBlock} />
      </StyledBioContainer>
    </StyledBoardCard>
  );
};

export default BoardMemberCard;
