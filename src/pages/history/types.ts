export interface Quote {
  id: string;
  quoteContent: string;
  quoteAuthor: string;
}

export interface GalleryImage {
  alt: string;
  hotspot: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  asset: {
    id: string;
    gatsbyImageData: any; // Update with the appropriate type for `gatsbyImageData`
  };
}

export interface TimelineEvent {
  yearOfEvent: number;
  eventDescription: string;
  id: string;
}

export interface HistoryPageQuery {
  historyPage: {
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock?: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Update with the appropriate type for `gatsbyImageData`
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
    headingTwo: string;
    hasGallery: boolean;
    quoteManyBlock?: Quote[];
    galleryManyBlock?: GalleryImage[];
    // timelineImg?: {
    //   alt: string;
    //   asset: {
    //     _id: string;
    //     gatsbyImageData: any; // Update with the appropriate type for `gatsbyImageData`
    //   };
    //   hotspot: {
    //     x: number;
    //     y: number;
    //     width: number;
    //     height: number;
    //   };
    //   crop: {
    //     top: number;
    //     right: number;
    //     left: number;
    //     bottom: number;
    //   };
    // };
    timelineTextBlock: any;
    timelineManyBlock?: TimelineEvent[];
  };
}
