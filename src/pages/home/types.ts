import { IGatsbyImageData } from 'gatsby-plugin-image';

// Define the expected shape of the data returned by the GraphQL query
export type HomePageQueryData = {
  homePage: {
    name: string;
    subheading: string;
    headingOneButtonPath: string;
    headingOneButtonText: string;
    vimeoId: string;
    videoOpened: boolean;
    videoError: boolean;
    playing: boolean;
    showHideVideoBtnText: boolean;
    whatWeProvideManyHeading: string;
    whatWeProvideBlock: Array<{
      id: string;
      link: string;
      whatWeProvideHeading: string;
      callToActionLink: string;
      tagName: string;
      pageImageBlock: {
        asset: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        };
        alt: string;
      };
    }>;
    newsManyHeading: string;
    hasGallery: boolean;
    galleryManyBlock: Array<{
      asset: {
        id: string;
        gatsbyImageData: IGatsbyImageData;
      };
      alt: string;
    }>;
  };
  latestNewsBlog: any;
  eventBlogs: any;
};
