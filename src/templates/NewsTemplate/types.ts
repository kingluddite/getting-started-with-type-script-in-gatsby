import { PageProps } from 'gatsby';

export interface NewsTemplateData {
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
  newsTextBlock: any; // Update the type as needed
}

export interface NewsTemplateProps extends PageProps {
  data: {
    news: NewsTemplateData;
  };
}
