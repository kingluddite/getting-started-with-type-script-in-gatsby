import { PageProps } from 'gatsby';

export interface PastWinnerSinglePageData {
  pastWinnerTitle: string;
  publishDate: string;
  pastWinnerImg: {
    alt?: string;
    asset: {
      gatsbyImageData: any;
    };
  } | null;
  pastWinnerTextBlock: any; // Update the type as needed
}

export interface SinglePastWinnerPageProps extends PageProps {
  data: {
    pastWinnerSinglePage: PastWinnerSinglePageData;
  };
}
