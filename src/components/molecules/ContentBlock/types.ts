// npm
import { ReactNode } from 'react';

import type { ImageContainerProps } from '@components/atoms/images/ImageContainer/types';

export interface ContentBlockProps {
  heading?: string;
  imageProps?: Partial<ImageContainerProps>; // make imageProps optional
  showImage?: boolean;
  callToActionLink?: string;
  callToActionTitle?: string;
  callToActionType?: 'link' | 'button';
  showCallToAction?: boolean;
  children: ReactNode;
}
