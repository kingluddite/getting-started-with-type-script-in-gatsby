export interface PastWinner {
  id: string;
  _type: string;
  slug: { current: string };
  pastWinnerTitle: string;
  pastWinnerContentExcerpt: string;
  pastWinnerTag: string;
  sortOrder?: number;
  pastWinnerImg: {
    alt: string;
    crop: { bottom: number; left: number; right: number; top: number };
    hotspot: { height: number; width: number; x: number; y: number };
    asset: { gatsbyImageData: any }; // Replace `any` with the correct type
  };
  publishDate?: Date | string;
}

export interface PastWinnersPageContext {
  skip?: number;
  currentPage?: number;
}

export interface PastWinnersPageData {
  pastWinnerPage: {
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
    };
    hasGallery: boolean;
    galleryManyBlock: {
      alt: string;
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
  };
  allSanityPastWinnerBlog: {
    totalCount: number;
    nodes: {
      id: string;
      _type: string;
      slug: {
        current: string;
      };
      pastWinnerTitle: string;
      pastWinnerContentExcerpt: string;
      pastWinnerTag: string;
      sortOrder: number;
      pastWinnerImg: {
        alt: string;
        crop: {
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot: {
          height: number;
          width: number;
          x: number;
          y: number;
        };
        asset: {
          gatsbyImageData: any;
        };
      };
      publishDate: string;
    }[];
  };
  searchablePastWinners: {
    nodes: {
      id: string;
      _type: string;
      slug: {
        current: string;
      };
      pastWinnerTitle: string;
      pastWinnerContentExcerpt: string;
      pastWinnerTag: string;
      pastWinnerImg: {
        alt: string;
        crop: {
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot: {
          height: number;
          width: number;
          x: number;
          y: number;
        };
        asset: {
          gatsbyImageData: any;
        };
      };
      publishDate: string;
    }[];
  };
}
