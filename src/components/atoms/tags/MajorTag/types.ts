export type ColorType = 'grey' | 'yellow';

export interface MajorTagProps {
  text: string;
  $color?: ColorType;
  color?: ColorType;
}

export interface StyledTagMajorProps {
  children: string;
  $color?: ColorType;
  color?: ColorType;
}
