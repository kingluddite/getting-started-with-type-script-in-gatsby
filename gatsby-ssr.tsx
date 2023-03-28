import React from 'react';
import { GatsbySSR } from 'gatsby';
import Layout from './src/components/shared/Layout';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
