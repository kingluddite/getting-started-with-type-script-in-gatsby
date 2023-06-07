import { PageProps } from 'gatsby';

export interface PastScholarshipWinnerTemplateData {
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

export interface PastScholarshipWinnerTemplateProps extends PageProps {
  data: {
    pastWinnerBlog: PastScholarshipWinnerTemplateData;
  };
}
