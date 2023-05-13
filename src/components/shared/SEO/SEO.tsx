// npm
import React from 'react';

// hooks
import { useSiteMetadata } from '@hooks/use-site-metadata';

// types
import type { SEOProps } from './types';

function SEO({
  children,
  description,
  image,
  location,
  pathname,
  title,
}: SEOProps) {
  const {
    // image
    description: defaultDescription,
    siteUrl,
    title: defaultTitle,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    // image: `${siteUrl}${image}`,
    description: description || defaultDescription,
    title: title || defaultTitle,
    twitterUsername,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* meta tags */}
      <meta name="description" content={seo.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      {/* <meta name="image" content={seo.image} /> */}
      <meta property="og:image" content={image || `/logo.svg`} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={seo.title} key="ogsitename" />
      <meta property="og:description" content={seo.description} key="ogdesc" />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {/* <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      /> */}
      {children}
    </>
  );
}

export default SEO;
