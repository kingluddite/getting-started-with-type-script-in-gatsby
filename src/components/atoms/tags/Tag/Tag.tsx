/* eslint-disable react/jsx-props-no-spreading */
// npm
import React from 'react';

// components
import MajorTag from '../MajorTag';
import MinorTag from '../MinorTag';

// types
interface TagProps {
  text: string;
  type: 'minor' | 'primary';
  color?: string;
}

export default function Tag({ type, text, color }: TagProps) {
  switch (type) {
    case `minor`:
      return <MinorTag text={text} />;
    case `primary`:
    default:
      return <MajorTag text={text} color={color} />;
  }
}
