export interface NotFoundProps {
  notFoundPage: {
    name: string;
    headingOne: string;
    subheading: string;
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
    } | null;
    notFoundTextBlock: any;
    hasGallery: boolean;
    galleryManyBlock:
      | {
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
        }[]
      | null;
  };
}
