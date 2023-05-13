export type EventPostListProps = {
  eventBlogs: {
    nodes: Array<{
      id: string;
      eventImg: { asset: { gatsbyImageData: any }; alt?: string };
      eventDate: string;
      slug: { current: string };
      eventTitle: string;
    }>;
  };
};
