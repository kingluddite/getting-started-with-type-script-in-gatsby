export interface GrantPageQuery {
  grantPage: {
    id: string;
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock: {
      alt: string | undefined;
      asset: {
        id: string;
        gatsbyImageData: any;
      } | null;
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
    headingTwo: string;
    grantImg: {
      alt: string | undefined;
      asset: {
        gatsbyImageData: any;
      } | null;
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
    } | null;
    grantTextBlock: any;
    grantAwardBlock: {
      grantAwardBlockHeading: string | undefined;
      grantAwardTextBlock: any;
      callToAction: string | undefined;
      callToActionLink: string | undefined;
      grantAwardImageBlock: {
        alt: string | undefined;
        asset: {
          gatsbyImageData: any;
        } | null;
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
      } | null;
    };
    grantEligibilityBlock: {
      grantEligibilityBlockHeading: string | undefined;
      grantEligibilityTextBlock: any;
      callToAction: string | undefined;
      callToActionLink: string | undefined;
      grantEligibilityImageBlock: {
        alt: string | undefined;
        asset: {
          gatsbyImageData: any;
        } | null;
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
      } | null;
    };
    hasGallery: boolean;
    galleryManyBlock: {
      alt: string | undefined;
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
    }[];
  };
}
