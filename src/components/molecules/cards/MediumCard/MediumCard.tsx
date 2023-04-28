/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// images
import DefaultThumbnailImage from '../../../atoms/images/DefaultThumbnailImage';

// styles
import {
  StyledCardAnchorContainer,
  StyledImageContainer,
  StyledCardLinkContainer,
} from './styles';
import CardContent from '../CardContent/CardContent';

// types
interface MediumCardProps {
  cardType?: string;
  actionType: string;
  to?: string;
  href?: string;
  tagText?: string;
  title: string;
  description?: string;
  image?: React.ReactNode;
}

export default function MediumCard({
  cardType,
  actionType,
  to = `/`,
  href = `#`,
  tagText,
  title,
  description,
  image,
}: MediumCardProps) {
  switch (cardType) {
    case `home`:
      return actionType === `anchor` || actionType === `external` ? (
        <StyledCardAnchorContainer
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImageContainer>
            {image || <DefaultThumbnailImage height={134} width={282} />}
          </StyledImageContainer>
          <CardContent
            actionType="anchor"
            cardType={cardType}
            tagText={tagText}
            title={title}
            description={description}
            charLimitTitle={40}
            charLimitDesc={82}
          />
        </StyledCardAnchorContainer>
      ) : (
        <StyledCardLinkContainer to={to}>
          <StyledImageContainer>
            {image || <DefaultThumbnailImage height={134} width={282} />}
          </StyledImageContainer>
          <CardContent
            actionType="link"
            tagText={tagText}
            title={title}
            description={description}
            charLimitTitle={40}
            charLimitDesc={82}
          />
        </StyledCardLinkContainer>
      );
    case `resource`:
      return (
        <StyledCardAnchorContainer
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImageContainer>
            {image || <DefaultThumbnailImage height={134} width={282} />}
          </StyledImageContainer>
          <CardContent
            actionType="anchor"
            cardType={cardType}
            title={title}
            description={description}
            charLimitTitle={40}
            charLimitDesc={82}
          />
        </StyledCardAnchorContainer>
      );
    case `pastEvent`:
    default:
      return (
        <StyledCardLinkContainer
          to={to}
          style={{
            minHeight: `fit-content`,
            width: `100%`,
          }}
        >
          <CardContent
            actionType="link"
            cardType={cardType}
            tagText={tagText}
            title={title}
            description={description}
            charLimitTitle={40}
            charLimitDesc={82}
          />
        </StyledCardLinkContainer>
      );
  }
}
