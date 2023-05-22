export interface JoinPageQuery {
  joinPage: {
    name: string;
    headingOne: string;
    subheading: string;
    instructions: string;
    pageImageBlock?: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Update this type accordingly
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
    hasGallery: boolean;
    galleryManyBlock?: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Update this type accordingly
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
    }[];
  };
}
