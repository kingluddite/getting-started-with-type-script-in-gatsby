import { PageProps } from 'gatsby';

export interface NewsSinglePageData {
  id: string;
  newsTag: string;
  newsPostTitle: string;
  publishDate: string;
  newsPostImg: {
    alt?: string;
    asset: {
      gatsbyImageData: any;
    };
  } | null;
  newsSinglePageTextBlock: any; // Update the type as needed
}

export interface SingleNewsPageProps extends PageProps {
  data: {
    newsSinglePage: NewsSinglePageData;
  };
}
