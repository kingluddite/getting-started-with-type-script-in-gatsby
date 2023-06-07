// npm
import React, { useEffect, useState, useCallback } from 'react';
import { HeadProps, PageProps, graphql } from 'gatsby';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// components
import SEO from '@shared/SEO';
import HeroHeading from '@components/molecules/HeroHeading';
import PostCard from '@components/molecules/cards/PostCard';
import LayoutContainer from '@shared/layout/LayoutContainer';
import Logo from '@components/atoms/Logo';
import Pagination from '@components/shared/Pagination';

// images
// import Gallery from '../components/atoms/Gallery';
import ImageContainer from '@components/atoms/images/ImageContainer';
import { StyledInput } from '@components/atoms/forms/FormInput/styles';
import {
  StyledForm,
  StyledSearchIcon,
  StyledSection,
  StyledTwoColumnSection,
} from './styles';

// types
import {
  PastWinner,
  PastWinnersPageContext,
  PastWinnersPageQuery,
} from './types';
import Gallery from '@components/atoms/images/Gallery';

const PastWinnersPage: React.FC<
  PageProps<PastWinnersPageQuery, PastWinnersPageContext>
> = ({ data, pageContext }) => {
  const {
    // name,
    headingOne,
    subheading,
    galleryManyBlock,
    hasGallery,
    pageImageBlock,
  } = data.pastWinnerPage;

  const [pastWinners, setPastWinners] = useState<PastWinner[]>(
    data.allSanityPastWinnerBlog.nodes,
  );
  const [searchTerm, setSearchTerm] = useState(``);
  const [showPagination, setShowPagination] = useState(true);
  const pageSize = process.env.GATSBY_PAGE_SIZE
    ? parseInt(process.env.GATSBY_PAGE_SIZE)
    : 10;

  // the searchPastWinners function is wrapped with useCallback, and its dependencies (data and searchTerm) are specified in the dependency array. Then, the useEffect hook is updated to use searchPastWinners as a dependency. This ensures that the useEffect hook only runs when searchPastWinners changes.
  const searchPastWinners = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault?.();
      if (!searchTerm.trim()) {
        setPastWinners(data.allSanityPastWinnerBlog.nodes);
        setShowPagination(true);
      }
      setShowPagination(false);
      const items = data?.searchablePastWinners?.nodes?.filter((article) =>
        article?.pastWinnerTitle
          ?.trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()),
      );
      setPastWinners(items);
    },
    [data, searchTerm],
  );

  useEffect(() => {
    const event = {} as React.FormEvent<HTMLFormElement>;
    searchPastWinners(event);
  }, [searchTerm, searchPastWinners]);

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
        <StyledForm onSubmit={searchPastWinners} role="search">
          <StyledInput
            id="searchInput"
            style={{
              background: `var(--c-white)`,
            }}
            placeholder="Search by Title"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search By Title"
          />
          <StyledSearchIcon icon={faSearch} />
        </StyledForm>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
        {pastWinners && pastWinners.length ? (
          <StyledTwoColumnSection>
            {pastWinners
              .sort((a, b) =>
                (a.sortOrder ?? 0) > (b.sortOrder ?? 0) ? 1 : -1,
              )
              .map((item) => {
                const date = item.publishDate || ``; // Provide a default value if publishDate is undefined
                return (
                  <PostCard
                    key={item.id}
                    image={item?.pastWinnerImg?.asset?.gatsbyImageData}
                    altText={item?.pastWinnerImg?.alt}
                    tagText={item.pastWinnerTag}
                    type={item._type}
                    to={`/past-scholarship-winners/${item.slug.current}`}
                    title={item.pastWinnerTitle}
                    description={item.pastWinnerContentExcerpt}
                    date={date}
                  />
                );
              })}
          </StyledTwoColumnSection>
        ) : (
          <StyledSection>
            <h2>No Past Winners Found</h2>
          </StyledSection>
        )}

        {showPagination ? (
          <StyledSection>
            <Pagination
              pageSize={pageSize}
              totalCount={data.allSanityPastWinnerBlog.totalCount}
              currentPage={pageContext?.currentPage || 1}
              skip={pageContext?.skip || 0}
              base="/news"
              visible={true}
            />
          </StyledSection>
        ) : null}
        <StyledSection>
          {hasGallery ? <Gallery images={galleryManyBlock} /> : null}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

export default PastWinnersPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<PastWinnersPageQuery>) {
  const { name } = data.pastWinnerPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query PastWinnersPageQuery($skip: Int = 0, $pageSize: Int = 10) {
    pastWinnerPage: sanityPage(name: { eq: "Past Scholarship Winners" }) {
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
    allSanityPastWinnerBlog(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        _type
        slug {
          current
        }
        pastWinnerTitle
        pastWinnerContentExcerpt
        pastWinnerTag
        sortOrder
        pastWinnerImg: pageImageBlock {
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
    searchablePastWinners: allSanityPastWinnerBlog {
      nodes {
        id
        _type
        slug {
          current
        }
        pastWinnerTitle
        pastWinnerContentExcerpt
        pastWinnerTag
        pastWinnerImg: pageImageBlock {
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
