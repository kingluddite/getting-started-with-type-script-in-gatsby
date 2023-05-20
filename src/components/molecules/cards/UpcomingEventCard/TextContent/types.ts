export type TextContentProps = {
  type?: string;
  heading: string;
  excerpt?: string;
  charLimitHeading: number;
  charLimitExcerpt: number;
};

export interface StyledTextHeadingProps {
  $type?: string;
}

export interface StyledTextContainerProps {
  $type?: string;
}
