// npm
import React from 'react';

// components
import Button from '@components/atoms/buttons/Button';
import Tag from '@components/atoms/tags/Tag';

// utility
import truncateText from '@utils/truncateText/truncateText';

// styles
import { StyledContentContainer, StyledMetaContainer } from './styles';

// types
import { CardContentProps } from './types';

const CardContent: React.FC<CardContentProps> = ({
  cardType,
  actionType,
  tagText,
  title,
  description,
  charLimitTitle,
  charLimitDesc,
}) => {
  return (
    <StyledContentContainer
      style={
        cardType === `pastEvent`
          ? {
              borderTop: `none`,
            }
          : undefined
      }
    >
      <StyledMetaContainer>
        {tagText && (
          <Tag
            type="primary"
            color={cardType === `pastEvent` ? `grey` : undefined}
            text={tagText}
          />
        )}
        <h3 title={title}>{truncateText(charLimitTitle, title)}</h3>
        {description && (
          <p title={description}>{truncateText(charLimitDesc, description)}</p>
        )}
      </StyledMetaContainer>
      <Button
        actionType={actionType === `link` ? `link` : `anchor`}
        theme="minor"
        disable
      >
        {cardType === `resource` ? `View resource` : `Learn more`}
      </Button>
    </StyledContentContainer>
  );
};

export default CardContent;
