import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface LatestNewsListProps {
  latestNewsBlog: {
    nodes: Array<{
      id: string;
      newsBlogImg: {
        alt: string;
        asset: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      newsTag: string;
      _type: string;
      publishDate: string;
      slug: {
        current: string;
      };
      newsBlogTitle: string;
      newsContentExcerpt?: string;
    }>;
  };
}
