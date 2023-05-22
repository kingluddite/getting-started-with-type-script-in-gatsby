// npm
import React, { useEffect, useState, useCallback } from 'react';
import { HeadProps, PageProps, graphql } from 'gatsby';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

// components
import SEO from '@shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import Pagination from '@components/shared/Pagination';
import PostCard from '@components/molecules/cards/PostCard';
import LayoutContainer from '@shared/layout/LayoutContainer';
import Logo from '@components/atoms/Logo';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';
// import Gallery from '../components/atoms/Gallery';

// styles
import {
  StyledForm,
  StyledSearchIcon,
  StyledSection,
  StyledTwoColumnSection,
} from './styles';
import { StyledInput } from '@components/atoms/forms/FormInput/styles';

// types
import { NewsPageContext, NewsPageQuery } from './types';

const NewsPage: React.FC<PageProps<NewsPageQuery, NewsPageContext>> = ({
  data,
  pageContext,
}) => {
  const {
    // name,
    headingOne,
    subheading,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.newsPage;

  const [newsBlogPosts, setNewsBlogPosts] = useState(data.allSanityNews.nodes);
  const [searchTerm, setSearchTerm] = useState(``);
  const [showPagination, setShowPagination] = useState(true);
  const pageSize = process.env.GATSBY_PAGE_SIZE
    ? parseInt(process.env.GATSBY_PAGE_SIZE)
    : 10;

  const searchNews = useCallback(
    (e: React.FormEvent) => {
      e?.preventDefault?.();
      if (!searchTerm.trim()) {
        setNewsBlogPosts(data.allSanityNews.nodes);
        setShowPagination(true);
      }
      setShowPagination(false);
      const items = data?.searchableNews?.nodes?.filter((article) =>
        article?.newsPostTitle
          ?.trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()),
      );
      setNewsBlogPosts(items);
    },
    [data, searchTerm],
  );

  useEffect(() => {
    const event = {} as React.FormEvent<HTMLFormElement>;
    searchNews(event);
  }, [searchTerm, searchNews]);

  return (
    <>
      <HeroHeading>
        <Logo />
        <h1>{headingOne}</h1>
        <p>{subheading}</p>
        {pageImageBlock?.asset?.gatsbyImageData ? (
          <ImageContainer
            image={pageImageBlock?.asset?.gatsbyImageData ?? null}
            type="dynamic"
            alt={pageImageBlock?.alt ? pageImageBlock.alt : ``}
          />
        ) : null}
        <StyledForm onSubmit={searchNews} role="search">
          <StyledInput
            id="searchInput"
            style={{
              background: `var(--c-white)`,
            }}
            placeholder="Search by Title"
            type="search"
            value={searchTerm}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setSearchTerm((e.target as HTMLInputElement).value)
            }
            aria-label="Search By Title"
          />
          <StyledSearchIcon icon={faSearch} />
        </StyledForm>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        {newsBlogPosts?.length ? (
          <StyledTwoColumnSection>
            {newsBlogPosts.map((b) => (
              <PostCard
                key={b.id}
                image={b?.newsImg?.asset?.gatsbyImageData}
                altText={b?.newsImg?.alt}
                tagText={b.newsTag}
                type={b._type}
                to={`/news/${b.slug.current}`}
                title={b.newsPostTitle}
                description={b.newsContentExcerpt}
                date={b.publishDate}
              />
            ))}
          </StyledTwoColumnSection>
        ) : (
          <StyledSection>
            <h2>No Posts Found</h2>
          </StyledSection>
        )}
        {showPagination ? (
          <StyledSection>
            <Pagination
              pageSize={pageSize}
              totalCount={data.allSanityNews.totalCount}
              currentPage={pageContext.currentPage ?? 1}
              skip={pageContext.skip ?? 0}
              base="/news"
              visible={true}
            />
          </StyledSection>
        ) : null}
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default NewsPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<NewsPageQuery>) {
  const { name } = data.newsPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query NewsPageQuery($skip: Int = 0, $pageSize: Int = 10) {
    newsPage: sanityPage(name: { eq: "News" }) {
      name
      headingOne
      subheading
      pageImageBlock {
        alt
        asset {
          id
          gatsbyImageData
        }
        hotspot {
          y
          x
          width
          height
        }
        crop {
          top
          right
          left
          bottom
        }
      }
      hasGallery
      galleryManyBlock {
        alt
        asset {
          id
          gatsbyImageData
        }
        crop {
          top
          right
          left
          bottom
        }
        hotspot {
          y
          x
          width
          height
        }
      }
    }
    allSanityNews(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        _type
        slug {
          current
        }
        newsPostTitle
        newsContentExcerpt
        newsTag
        newsImg: pageImageBlock {
          alt
          crop {
            bottom
            left
            right
            top
          }
          hotspot {
            height
            width
            x
            y
          }
          asset {
            gatsbyImageData
          }
        }
        publishDate(formatString: "LL")
      }
    }
    searchableNews: allSanityNews {
      nodes {
        id
        _type
        slug {
          current
        }
        newsPostTitle
        newsContentExcerpt
        newsTag
        newsImg: pageImageBlock {
          alt
          crop {
            bottom
            left
            right
            top
          }
          hotspot {
            height
            width
            x
            y
          }
          asset {
            gatsbyImageData
          }
        }
        publishDate(formatString: "LL")
      }
    }
  }
`;
