import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PageImageBlock {
  alt?: string;
  asset: {
    id: string;
    gatsbyImageData?: IGatsbyImageData;
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

export interface LegendCardData {
  id: string;
  fullName: string;
  expertise: string;
  callToActionLink: string;
  callToAction: string;
  legendImg: PageImageBlock;
}

export interface GalleryManyBlock {
  alt?: string;
  asset: {
    id: string;
    gatsbyImageData?: IGatsbyImageData;
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

export interface QuoteManyBlock {
  id: string;
  quoteContent: string;
  quoteAuthor: string;
}

export interface LegendsPageQueryData {
  legendsPage: {
    name: string;
    headingOne: string;
    subheading: string;
    quoteManyBlock: QuoteManyBlock[];
    pageImageBlock?: PageImageBlock;
    legendBlock: LegendCardData[];
    hasGallery: boolean;
    galleryManyBlock: GalleryManyBlock[];
  };
}

export interface LegendsPageProps {
  data: LegendsPageQueryData;
}
