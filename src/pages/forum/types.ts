export interface ForumPageQuery {
  forumPage: {
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock?: {
      alt?: string;
      asset?: {
        id: string;
        gatsbyImageData: any;
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
    headingTwo: string;
    whoWeAreImg?: {
      alt?: string;
      asset?: {
        gatsbyImageData: any;
      };
    };
    whoWeAreTextBlock?: any;
    howToJoinBlock: {
      howToJoinHeading?: string;
      howToJoinTextBlock?: any;
      callToAction?: string;
      callToActionLink?: string;
      howToJoinImageBlock?: {
        alt?: string;
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
        asset?: {
          gatsbyImageData: any;
        };
      };
    };
    whatYouGetBlock: {
      whatYouGetHeading?: string;
      whatYouGetTextBlock?: any;
      callToAction?: string;
      callToActionLink?: string;
      whatYouGetImageBlock?: {
        alt?: string;
        asset?: {
          gatsbyImageData: any;
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
      };
    };
    howToGetInvolvedBlock: {
      howToGetInvolvedHeading?: string;
      howToGetInvolvedTextBlock?: any;
      callToAction?: string;
      callToActionLink?: string;
      howToGetInvolvedImageBlock?: {
        alt?: string;
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
        asset?: {
          gatsbyImageData: any;
        };
      };
    };
    faqManyHeading?: string;
    faqManyBlock: Array<{
      id: string;
      faqQuestion: string;
      faqAnswer: string;
    }>;
    hasGallery: boolean;
    galleryManyBlock: Array<{
      alt?: string;
      asset?: {
        id: string;
        gatsbyImageData: any;
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
    }>;
  };
}
