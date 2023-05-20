import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface UpcomingEventCardProps {
  type?: string;
  to: string;
  image?: IGatsbyImageData;
  altText: string;
  date?: string;
  tagText: string;
  title: string;
  description: string;
  eventTag: string;
}
