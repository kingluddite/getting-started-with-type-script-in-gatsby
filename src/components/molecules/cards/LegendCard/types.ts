import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface LegendCardProps {
  data: {
    legendImg: {
      asset: {
        gatsbyImageData?: IGatsbyImageData;
        alt?: string;
      };
    };
    fullName: string;
    expertise: string;
    callToAction: string;
    callToActionLink: string;
  };
}
