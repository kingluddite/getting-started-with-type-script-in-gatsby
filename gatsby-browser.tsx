import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/shared/Layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
