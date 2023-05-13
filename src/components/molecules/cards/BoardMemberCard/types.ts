import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface BoardMemberCardProps {
  data: {
    bioImg: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
      alt: string;
    };
    fullName: string;
    expertise: string;
    callToAction: string;
    callToActionLink: string;
    jobTitle: string;
    bioTextBlock: any;
  };
}
