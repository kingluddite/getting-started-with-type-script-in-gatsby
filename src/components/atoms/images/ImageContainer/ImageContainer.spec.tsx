import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// import { StaticImage } from 'gatsby-plugin-image';
import ImageContainer from './ImageContainer';

describe(`ImageContainer`, () => {
  it(`renders the static image correctly`, () => {
    const image = <img src="/path/to/image.jpg" alt="Static Image" />;
    const type = `static`;
    const { getByAltText } = render(
      <ImageContainer type={type} image={image} alt="Static Image" />,
    );
    const staticImage = getByAltText(`Static Image`);
    expect(staticImage).toBeInTheDocument();
    expect(staticImage).toHaveAttribute(`src`, `/path/to/image.jpg`);
  });

  // it(`renders the GatsbyImage correctly`, () => {
  //   const type = `gatsby`;

  //   const { getByAltText } = render(
  //     <ImageContainer
  //       type={type}
  //       image={<StaticImage src="/path/to/image.jpg" alt="Gatsby Image" />}
  //       alt="Gatsby Image"
  //       width={200}
  //       height={150}
  //     />,
  //   );

  //   const gatsbyImage = getByAltText(`Gatsby Image`);

  //   console.log(gatsbyImage);

  //   expect(gatsbyImage).toBeInTheDocument();
  //   expect(gatsbyImage).toHaveAttribute(`src`, `/path/to/image.jpg`);
  //   expect(gatsbyImage).toHaveStyle(`width: 100%`);
  //   expect(gatsbyImage).toHaveStyle(`height: 100%`);
  // });
});
