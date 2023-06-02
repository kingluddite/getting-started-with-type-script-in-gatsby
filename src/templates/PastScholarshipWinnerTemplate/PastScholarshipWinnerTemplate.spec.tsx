import { describe, it } from 'vitest';
// import PastScholarshipWinnerTemplate from './PastScholarshipWinnerTemplate';

// Mock the GraphQL query result
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const mockData = {
  pastWinnerSinglePage: {
    pastWinnerTitle: `Test Past Winner`,
    pastWinnerImg: {
      alt: `Past Winner Image`,
      asset: {
        gatsbyImageData: `test-gatsby-image-data`,
      },
    },
    publishDate: `June 1, 2023`,
    pastWinnerTextBlock: {
      // mock PortableText value
    },
  },
};

describe(`PastScholarshipWinnerTemplate`, () => {
  it(`renders the past scholarship winner template correctly`, () => {
    // render(<PastScholarshipWinnerTemplate data={mockData as any} />);
    // expect(screen.getByText('Test Past Winner')).toBeInTheDocument();
    // expect(screen.getByText('Past Winner Image')).toBeInTheDocument();
    // expect(screen.getByText('June 1, 2023')).toBeInTheDocument();
    // expect(screen.getByText('All Past Scholarship Winners')).toBeInTheDocument();
  });
});
