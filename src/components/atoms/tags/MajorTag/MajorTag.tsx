import React from 'react';
import { StyledTagMajor } from './styles';

type ColorType = 'grey' | 'yellow';

interface MajorTagProps {
  text: string;
  color: ColorType;
}

export default function MajorTag({ text, color }: MajorTagProps) {
  return <StyledTagMajor $color={color}>{text}</StyledTagMajor>;
}
