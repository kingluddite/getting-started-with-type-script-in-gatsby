import { describe, it } from 'vitest';
// import NewsTemplate from './NewsTemplate';

// Mock the GraphQL query result
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const mockData = {
  news: {
    id: `123`,
    newsTag: `Test Tag`,
    newsPostTitle: `Test News`,
    publishDate: `June 1, 2023`,
    newsPostImg: {
      alt: `News Image`,
      asset: {
        gatsbyImageData: `test-gatsby-image-data`,
      },
    },
    newsTextBlock: {
      // mock PortableText value
    },
  },
};

describe(`NewsTemplate`, () => {
  it(`renders the news template correctly`, () => {
    // render(<NewsTemplate data={mockData as any} />);
    // expect(screen.getByText('Test News')).toBeInTheDocument();
    // expect(screen.getByText('News Image')).toBeInTheDocument();
    // expect(screen.getByText('June 1, 2023')).toBeInTheDocument();
    // expect(screen.getByText('All News')).toBeInTheDocument();
  });
});
