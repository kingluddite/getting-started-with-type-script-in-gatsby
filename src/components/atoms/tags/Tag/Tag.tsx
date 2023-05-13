// npm
import React from 'react';

// components
import MajorTag from '../MajorTag';
import MinorTag from '../MinorTag';

// types
import type { TagProps } from './types';

function Tag({ type, text, color }: TagProps) {
  switch (type) {
    case `minor`:
      return <MinorTag text={text} />;
    case `primary`:
    default:
      return <MajorTag text={text} color={color} />;
  }
}

export default Tag;
