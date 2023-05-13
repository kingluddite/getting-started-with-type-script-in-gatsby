// npm
import React from 'react';

// styles
import { StyledTagMajor } from './styles';

// types
import { MajorTagProps } from './types';

function MajorTag({ text, color }: MajorTagProps) {
  return <StyledTagMajor $color={color} text={text} />;
}

export default MajorTag;
