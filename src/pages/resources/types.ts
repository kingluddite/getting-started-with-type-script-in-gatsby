import { PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Resource {
  id: string;
  resourceType: string;
  resourceBlockHeading: string;
  resourceDescription: string;
  resourceImg: {
    alt: string;
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
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
  };
  callToAction: string;
  callToActionLink: string;
}

export interface GalleryImage {
  alt: string;
  asset: {
    id: string;
    gatsbyImageData: string;
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
}

export interface ResourcesPageQuery {
  resourcesPage: {
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: string;
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
    resourcesManyBlock: Resource[];
    hasGallery: boolean;
    galleryManyBlock: GalleryImage[];
  };
}

export interface ResourcesPageProps extends PageProps {
  data: ResourcesPageQuery;
}
