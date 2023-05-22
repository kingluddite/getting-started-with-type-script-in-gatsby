export interface EventData {
  id: string;
  eventTitle: string;
  eventExcerpt: string;
  eventDate: string;
  slug: {
    current: string;
  };
  eventImg: {
    alt: string;
    asset: {
      gatsbyImageData: any; // Replace with the appropriate type for gatsbyImageData
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
  };
}

export interface EventsPageQuery {
  eventsPage: {
    id: string;
    name: string;
    headingOne: string;
    subheading: string;
    pageImageBlock?: {
      alt: string;
      asset: {
        gatsbyImageData: any; // Replace with the appropriate type for gatsbyImageData
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
    galleryManyBlock?: {
      alt: string;
      asset: {
        id: string;
        gatsbyImageData: any; // Replace with the appropriate type for gatsbyImageData
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
  eventBlogs: {
    totalCount: number;
    nodes: EventData[];
  };
}
