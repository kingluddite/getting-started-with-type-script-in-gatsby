// npm
import React from 'react';

// components
import Button from '../../../atoms/buttons/Button';
import Tag from '../../../atoms/tags/Tag';

// utility
import truncateText from '../../../../utils/truncateText';

// styles
import { StyledContentContainer, StyledMetaContainer } from './styles';

interface CardContentProps {
  cardType?: string;
  actionType: string;
  tagText?: string;
  title: string;
  description?: string;
  charLimitTitle: number;
  charLimitDesc: number;
}

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
