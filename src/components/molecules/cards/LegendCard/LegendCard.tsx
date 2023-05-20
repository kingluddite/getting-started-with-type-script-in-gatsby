// npm
import React from 'react';

// components
import Button from '@components/atoms/buttons/Button';

// styles
import {
  StyledGatsbyImage,
  StyledLegendCard,
  StyledMetaContainer,
} from './styles';

// types
import { LegendCardProps } from './types';

function LegendCard({
  data: { legendImg, fullName, expertise, callToAction, callToActionLink },
}: LegendCardProps) {
  return (
    <StyledLegendCard>
      {legendImg?.asset?.gatsbyImageData ? (
        <StyledGatsbyImage
          image={legendImg.asset.gatsbyImageData}
          alt={legendImg.asset.alt ? legendImg.asset.alt : ``}
          imgStyle={{ borderRadius: `var(--radius-full)` }}
        />
      ) : null}
      <StyledMetaContainer>
        <h3>{fullName}</h3>
        <p>{expertise}</p>
      </StyledMetaContainer>
      {callToAction && callToActionLink ? (
        <Button theme="minor" actionType="external" link={callToActionLink}>
          {callToAction}
        </Button>
      ) : null}
    </StyledLegendCard>
  );
}

export default LegendCard;
