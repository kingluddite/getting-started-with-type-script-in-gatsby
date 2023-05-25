export type EventTemplateProps = {
  data: {
    event: {
      id: string;
      eventDate: string;
      eventTitle: string;
      eventText: any;
      eventImg: {
        alt?: string;
        asset: {
          gatsbyImageData: any; // Add a suitable type for gatsbyImageData
        };
        crop: {
          top: number;
          right: number;
          left: number;
          bottom: number;
        };
        hotspot: {
          width: number;
          height: number;
          y: number;
          x: number;
        };
      } | null;
    };
  };
};
