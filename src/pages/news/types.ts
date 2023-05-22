export interface NewsPageQuery {
  newsPage: {
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock?: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Update the type to match the actual image data type
      };
      hotspot?: {
        y: number;
        x: number;
        width: number;
        height: number;
      };
      crop?: {
        top: number;
        right: number;
        left: number;
        bottom: number;
      };
    };
    hasGallery: boolean;
    galleryManyBlock?: Array<{
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Update the type to match the actual image data type
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
    }>;
  };
  allSanityNews: {
    totalCount: number;
    nodes: Array<{
      id: string;
      _type: string;
      slug: {
        current: string;
      };
      newsPostTitle: string;
      newsContentExcerpt: string;
      newsTag: string;
      newsImg?: {
        alt: string;
        crop?: {
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot?: {
          height: number;
          width: number;
          x: number;
          y: number;
        };
        asset: {
          gatsbyImageData: any; // Update the type to match the actual image data type
        };
      };
      publishDate: string;
    }>;
  };
  searchableNews: {
    nodes: Array<{
      id: string;
      _type: string;
      slug: {
        current: string;
      };
      newsPostTitle: string;
      newsContentExcerpt: string;
      newsTag: string;
      newsImg?: {
        alt: string;
        crop?: {
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot?: {
          height: number;
          width: number;
          x: number;
          y: number;
        };
        asset: {
          gatsbyImageData: any; // Update the type to match the actual image data type
        };
      };
      publishDate: string;
    }>;
  };
}

export interface NewsPageContext {
  currentPage?: number;
  skip?: number;
}
