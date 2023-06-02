// npm
import React from 'react';

// components
import PostCard from '@components/molecules/cards/PostCard';

// styles
import { StyledPostContainer } from './styles';

// types
import type { LatestNewsListProps } from './types';

const LatestNewsList: React.FC<LatestNewsListProps> = ({ latestNewsBlog }) => {
  // Creating a local variable for easier access to the nodes array
  const newsArr = latestNewsBlog.nodes;
  return (
    <StyledPostContainer data-testid="post-card-container">
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
          data-testid="post-card"
        />
      ))}
    </StyledPostContainer>
  );
};

export default LatestNewsList;
