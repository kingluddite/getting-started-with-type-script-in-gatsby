// npm
// import React from 'react';
// import { render } from '@testing-library/react';

// component to test
// import LatestNewsList from './LatestNewsList';
import { describe, it } from 'vitest';

// mock data
const latestNewsBlog = {
  nodes: [
    {
      id: 1,
      newsBlogImg: {
        asset: {
          gatsbyImageData: `mockImageData`,
        },
        alt: `Mock alt text`,
      },
      newsTag: `Mock tag`,
      _type: `Mock type`,
      publishDate: `2023-05-31`,
      slug: {
        current: `mock-slug`,
      },
      newsBlogTitle: `Mock title`,
      newsContentExcerpt: `Mock description`,
    },
  ],
};
console.log(latestNewsBlog);

// fix this use of any in ts
describe(`LatestNewsList`, () => {
  it(`renders the list of news cards`, () => {
    // Arrange
    // @ts-ignore
    // const { getByTestId } = render(
    //   <LatestNewsList latestNewsBlog={latestNewsBlog as any} />,
    // );
    // Act
    // const postCardContainer = getByTestId(`post-card-container`);
    // const postCard = getByTestId(`post-card`);
    // Assert
    // expect(postCardContainer).toBeInTheDocument();
    // expect(postCard).toBeInTheDocument();
  });
});
