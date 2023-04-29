import React from 'react';
import truncateText from '../../../utils/truncateText';

import { StyledTextContainer, StyledTextHeading } from './styles';

type TextContentProps = {
  type: string;
  heading: string;
  excerpt?: string;
  charLimitHeading: number;
  charLimitExcerpt: number;
};

function TextContent({
  type,
  heading,
  excerpt,
  charLimitHeading,
  charLimitExcerpt,
}: TextContentProps) {
  // Render different content based on the "type" prop
  switch (type) {
    case `news`: // If the type is "news"
      return (
        <StyledTextContainer>
          {/* Display the heading */}
          <StyledTextHeading title={heading}>
            {truncateText(charLimitHeading, heading)}
          </StyledTextHeading>
          {/* Display the excerpt */}
          <p title={excerpt}>{truncateText(charLimitExcerpt, excerpt)}</p>
          {/* Optionally display a "read more" link */}
          {/* <p className="read-more-excerpt">(READ MORE)</p> */}
        </StyledTextContainer>
      );
    default: // If the type is not "news"
      return (
        <StyledTextContainer $type={type}>
          {/* Display the heading */}
          <StyledTextHeading $type={type} title={heading}>
            {truncateText(charLimitHeading, heading)}
          </StyledTextHeading>
          {/* Display the excerpt */}
          <p title={excerpt}>{truncateText(charLimitExcerpt, excerpt)}</p>
        </StyledTextContainer>
      );
  }
}

export default TextContent;
