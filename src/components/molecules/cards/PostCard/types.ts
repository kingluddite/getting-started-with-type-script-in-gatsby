export interface PostCardProps {
  type: string;
  to: string;
  image: any;
  altText?: string;
  date: Date | string;
  tagText: string;
  title: string;
  description?: string;
  pastWinners?: any;
}
