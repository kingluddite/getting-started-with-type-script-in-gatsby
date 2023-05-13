// npm
import React from 'react';

// styles
import { StyledTagMinor } from './styles';

// types
import { MinorTagProps } from './types';

function MinorTag({ text }: MinorTagProps) {
  return <StyledTagMinor>{text}</StyledTagMinor>;
}

export default MinorTag;
