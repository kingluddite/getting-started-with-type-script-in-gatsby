// npm
import React from 'react';

// components
import ImageContainer from '@components/atoms/images/ImageContainer';

import Button from '@components/atoms/buttons/Button';

// styles
import { StyledContent, StyledContentBlock } from './styles';

// types
import { ContentBlockProps } from './types';

const ContentBlock = ({
  heading,
  imageProps = {},
  showImage = false,
  callToActionLink,
  callToActionTitle,
  callToActionType = `link`,
  showCallToAction = false,
  children,
}: ContentBlockProps) => {
  return (
    <StyledContentBlock>
      {heading ? <h2>{heading}</h2> : null}
      {imageProps?.image && showImage ? (
        <ImageContainer
          {...imageProps}
          alt={imageProps.alt || `Default Alt Text`}
        />
      ) : null}
      <StyledContent>{children}</StyledContent>
      {callToActionLink && callToActionTitle && showCallToAction ? (
        <Button
          className="c2a"
          actionType={callToActionType}
          theme="primary"
          link={callToActionLink}
        >
          {callToActionTitle}
        </Button>
      ) : null}
    </StyledContentBlock>
  );
};

export default ContentBlock;
