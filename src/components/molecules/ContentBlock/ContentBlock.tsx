import React, { ReactNode } from 'react';

// components
import ImageContainer from '@components/atoms/images/ImageContainer';
import type { ImageContainerProps } from '@components/atoms/images/ImageContainer/ImageContainer';
import Button from '@components/atoms/buttons/MinorButton';

// styles
import { StyledContent, StyledContentBlock } from './styles';

interface ContentBlockProps {
  heading?: string;
  imageProps?: Partial<ImageContainerProps>; // make imageProps optional
  showImage?: boolean;
  callToActionLink?: string;
  callToActionTitle?: string;
  callToActionType?: 'link' | 'button';
  showCallToAction?: boolean;
  children: ReactNode;
}

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
