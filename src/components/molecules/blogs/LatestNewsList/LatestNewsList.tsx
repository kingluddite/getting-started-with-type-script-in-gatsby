import React from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import PostCard from '../../cards/PostCard';

import { StyledPostContainer } from './styles';

interface LatestNewsListProps {
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

const LatestNewsList: React.FC<LatestNewsListProps> = ({ latestNewsBlog }) => {
  // Creating a local variable for easier access to the nodes array
  const newsArr = latestNewsBlog.nodes;
  return (
    <StyledPostContainer>
      {newsArr.map((l) => (
        <PostCard
          key={l.id}
          image={l?.newsBlogImg?.asset?.gatsbyImageData}
          altText={l?.newsBlogImg?.alt || ``}
          tagText={l.newsTag}
          type={l._type}
          date={l.publishDate}
          to={`news/${l.slug.current}`}
          title={l.newsBlogTitle}
          description={l.newsContentExcerpt}
        />
      ))}
    </StyledPostContainer>
  );
};

export default LatestNewsList;