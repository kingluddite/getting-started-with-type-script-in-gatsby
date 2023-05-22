import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ResourceImg {
  alt: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface Quote {
  id: string;
  quoteContent: string;
  quoteAuthor: string;
}

export interface QuoteManyBlock {
  quotes: Quote[];
  quoteBlockHeading?: string;
  callToAction?: string;
  callToActionLink?: string;
}

export interface ScholarshipRequirementForStudentBlock {
  requirements: string[];
  scholarshipRequirementBlockHeading?: string;
  callToAction?: string;
  callToActionLink?: string;
  scholarshipRequirementForStudentImageBlock?: {
    alt: string;
    asset: {
      gatsbyImageData: IGatsbyImageData;
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
}

export interface ScholarshipsPageQuery {
  scholarshipPage: {
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock?: {
      alt: string;
      asset: {
        gatsbyImageData: IGatsbyImageData;
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
    scholarshipTextBlock: any;
    headingOneButtonText: string;
    headingOneButtonPath: string;
    headingTwo?: string;
    scholarshipImg?: ResourceImg;
    scholarshipCriteriaBlock: {
      scholarshipCriteriaTextBlock: any; // Adjust the type based on the actual data structure
      scholarshipCriteriaBlockHeading?: string;
      callToAction?: string;
      callToActionLink?: string;
      scholarshipCriteriaImageBlock?: {
        alt: string;
        asset: {
          gatsbyImageData: IGatsbyImageData;
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
    };
    scholarshipEligibilityBlock: {
      scholarshipEligibilityBlockHeading?: string;
      scholarshipEligibilityTextBlock: any; // Adjust the type based on the actual data structure
      callToAction?: string;
      callToActionLink?: string;
      scholarshipEligibilityImageBlock?: {
        alt: string;
        asset: {
          gatsbyImageData: IGatsbyImageData;
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
    };
    scholarshipAppRequirementBlock: {
      scholarshipAppRequirementBlockHeading?: string;
      scholarshipAppRequirementTextBlock: any; // Adjust the type based on the actual data structure
      callToAction?: string;
      callToActionLink?: string;
      scholarshipAppRequirementImageBlock?: {
        alt: string;
        asset: {
          gatsbyImageData: IGatsbyImageData;
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
    };
    quoteManyBlock?: {
      id: string;
      quoteContent: string;
      quoteAuthor: string;
    }[];
    scholarshipSelectionBlock: {
      scholarshipSelectionProcessBlockHeading?: string;
      scholarshipSelectionProcessTextBlock: any; // Adjust the type based on the actual data structure
      callToAction?: string;
      callToActionLink?: string;
      scholarshipSelectionImageBlock?: {
        alt?: string;
        asset?: {
          gatsbyImageData?: any; // Adjust the type based on the actual data structure
        };
        crop?: {
          top?: number;
          right?: number;
          left?: number;
          bottom?: number;
        };
        hotspot?: {
          y?: number;
          x?: number;
          width?: number;
          height?: number;
        };
      };
    };
    scholarshipRequirementForStudentBlock: any;
  };
}
