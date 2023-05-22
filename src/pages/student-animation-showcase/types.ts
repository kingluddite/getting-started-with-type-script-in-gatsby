export interface SASPageQuery {
  sasPage: {
    name: string;
    headingOne: string;
    headingOneButtonPath: string;
    headingOneButtonText: string;
    subheading: string;
    headingTwo: string;
    pageImageBlock?: {
      asset?: {
        gatsbyImageData?: any;
      };
      alt?: string;
    };
    sasTextBlock: any;
    hasGallery: boolean;
    galleryManyBlock?: {
      asset?: {
        gatsbyImageData?: any;
      };
      alt?: string;
    }[];
  };
}
