import { IGatsbyImageData } from 'gatsby-plugin-image';

export type AboutPageQueryData = {
  aboutPage: {
    name: string;
    headingOne: string;
    subheading: string;
    headingTwo: string;
    whoWeAreImg: {
      asset: {
        gatsbyImageData: any;
      };
      alt: string;
    };
    missionTextBlock: string;
    quoteManyBlock: Array<{
      id: string;
      quoteContent: string;
      quoteAuthor: string;
    }>;
    boardMemberManyHeading: string;
    boardMemberBlock: Array<{
      bioImg: {
        asset: {
          gatsbyImageData: any;
        };
        alt: string;
      };
      bioHeading: string;
      callToAction: string;
      callToActionLink: string;
      id: string;
      fullName: string;
      jobTitle: string;
      expertise: string;
      bioTextBlock: string;
    }>;
    galleryManyBlock: {
      id: string;
      alt?: string;
      asset: {
        id: string;
        gatsbyImageData: any;
      };
      crop: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
      hotspot: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
    }[];
    hasGallery: boolean;
    pageImageBlock: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any;
      };
      hotspot: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
      crop: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
    };
  };
};

export type QuoteBlock = {
  id: string;
  quoteContent: string;
  quoteAuthor: string;
};

export type BoardMemberBlock = {
  id: string;
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
