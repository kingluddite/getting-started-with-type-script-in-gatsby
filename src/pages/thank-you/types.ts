export interface ThankYouPageData {
  thankYouPage: {
    name: string;
    headingOne: string;
    subheading: string;
    thankYouTextBlock: any;
    pageImageBlock?: {
      alt?: string;
      asset?: {
        gatsbyImageData: any; // Adjust the type based on the actual data structure
      };
    };
    hasGallery: boolean;
    galleryManyBlock?: {
      alt?: string;
      asset?: {
        id: string;
        gatsbyImageData: any; // Adjust the type based on the actual data structure
      };
      crop?: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
      hotspot?: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
    }[];
  };
}
