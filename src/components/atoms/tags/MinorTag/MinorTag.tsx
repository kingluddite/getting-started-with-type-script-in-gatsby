/* eslint-disable react/jsx-props-no-spreading */
// npm
import React from 'react';

// styles
import { StyledTagMinor } from './styles';

// types
interface MinorTagProps {
  text: string;
}

function MinorTag({ text }: MinorTagProps) {
  return <StyledTagMinor>{text}</StyledTagMinor>;
}

export default MinorTag;
