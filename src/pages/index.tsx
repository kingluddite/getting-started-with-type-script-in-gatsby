// Import React and related modules
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

// Import Gatsby modules
import { graphql } from 'gatsby';
import type { PageProps, HeadProps } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

// Import custom components
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
import Button from '@components/atoms/buttons/Button';
import SEO from '@components/shared/SEO';
import LayoutContainer from '@components/shared/layout/LayoutContainer';
import MediumCard from '@components/molecules/cards/MediumCard';
// import Gallery from '@components/atoms/images/Gallery';

import EventPostList from '@components/molecules/blogs/EventPostList';
import LatestNewsList from '@components/molecules/blogs/LatestNewsList';

// styles
import {
  StyledSection,
  PlayerWrapper,
  StyledSectionTitle,
  StyledProvideCardGrid,
  StyledFlexContainer,
  StyledLatestNewsContainer,
} from './home/styles';

// types
import type { HomePageQueryData } from './home/types';
// import type { GalleryProps } from '@components/atoms/images/Gallery/Gallery';

// Define the HomePage component
const HomePage = ({
  data: { homePage, latestNewsBlog, eventBlogs },
}: PageProps<HomePageQueryData>) => {
  // Extract the required data from the props object
  const {
    subheading,
    headingOneButtonPath,
    headingOneButtonText,
    vimeoId,
    showHideVideoBtnText,
    whatWeProvideManyHeading,
    whatWeProvideBlock,
    newsManyHeading,
    // hasGallery,
    // galleryManyBlock,
  } = homePage;

  // Set up state for the video player
  const [videoOpened, setVideoOpened] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Define the playVideo and hideVideo event handlers

  // Callback function to open the video
  const playVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(true);
    setPlaying(true);
  };

  // Callback function to close the video
  const hideVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(false);
    setPlaying(false);
  };

  // Render the HomePage component
  return (
    <>
      {/* Render the hero section */}
      <HeroHeading home>
        {/* Render the logo */}
        <Logo size="large" />
        <Logo size="textOnly" />
        {/* Render the subheading */}
        <p>{subheading}</p>
        {/* Render CTA button and video button if Vimeo ID is present */}
        <StyledFlexContainer>
          <Button actionType="link" link={headingOneButtonPath}>
            {headingOneButtonText}
          </Button>
          {/* If the vimeoId exists and the video is not opened, render the play button */}
          {vimeoId && !videoOpened ? (
            <Button actionType="button" action={playVideo}>
              <FontAwesomeIcon icon={faPlay} /> Play {showHideVideoBtnText}
            </Button>
          ) : // If the vimeoId exists and the video is opened, render the hide button
          vimeoId && videoOpened ? (
            <Button actionType="button" action={hideVideo}>
              <FontAwesomeIcon icon={faStop} /> Hide {showHideVideoBtnText}
            </Button>
          ) : null}
        </StyledFlexContainer>
      </HeroHeading>

      {/* Render the layout container */}
      <LayoutContainer hasSectionGaps>
        {/* If vimeoId exists, render the video player */}
        {vimeoId && (
          <StyledSection
            style={{
              display: vimeoId && videoOpened && !videoError ? `block` : `none`,
            }}
          >
            <PlayerWrapper>
              <ReactPlayer
                className="react-player"
                url={
                  vimeoId?.includes(`.`)
                    ? vimeoId
                    : `https://vimeo.com/${vimeoId}`
                }
                width="100%"
                height="100%"
                controls
                playing={playing}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onError={() => setVideoError(true)}
              />
            </PlayerWrapper>
          </StyledSection>
        )}
        {/* Render error message if there's an error playing the video */}
        {vimeoId && videoOpened && videoError ? (
          <StyledSection>
            <p>There was an issue playing this video</p>
          </StyledSection>
        ) : null}
        {/* Render the 'What We Provide' section */}
        <StyledSection>
          <StyledSectionTitle>{whatWeProvideManyHeading}</StyledSectionTitle>
          <StyledProvideCardGrid>
            {/* Mapping over an array of objects to create cards for each item */}
            {whatWeProvideBlock.map((s) => (
              <MediumCard
                cardType="home"
                key={s.id}
                actionType={s.link}
                title={s.whatWeProvideHeading}
                // description={s.whatWeProvideDescription}
                to={s.callToActionLink}
                tagText={s.tagName}
                image={
                  // Displaying either a GatsbyImage or a StaticImage depending on the availability of image data
                  s?.pageImageBlock?.asset?.gatsbyImageData ? (
                    <GatsbyImage
                      image={s.pageImageBlock.asset.gatsbyImageData}
                      alt={s.pageImageBlock.alt}
                      imgStyle={{
                        height: `134px`,
                        width: `282px`,
                        borderRadius: `var(--radius-lg) var(--radius-lg) 0 0`,
                      }}
                    />
                  ) : (
                    <StaticImage
                      src="./home/grants_home_card.jpeg"
                      alt={s.pageImageBlock.alt}
                      height={134}
                      width={282}
                    />
                  )
                }
              />
            ))}
          </StyledProvideCardGrid>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>{newsManyHeading}</StyledSectionTitle>
          <StyledLatestNewsContainer>
            {/* short news list */}
            <LatestNewsList latestNewsBlog={latestNewsBlog} />
            {/* short events list */}
            <EventPostList eventBlogs={eventBlogs} />
          </StyledLatestNewsContainer>
        </StyledSection>

        <StyledSection>
          {/* {hasGallery && galleryManyBlock ? ( // Conditional rendering of a Gallery component if there's a gallery available
            <Gallery
              images={
                // Mapping over an array of objects to create images for the gallery
                galleryManyBlock.map((image) => ({
                  imageData: image.asset.gatsbyImageData,
                  alt: image.alt,
                  loading: `lazy`,
                  className: `gallery-image`,
                  style: { maxWidth: `100%` },
                })) as GalleryProps['images']
              }
            />
          ) : null} */}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

// the query used to retrieve data from Sanity CMS
export const query = graphql`
  query HomePageQuery {
    homePage: sanityPage(name: { eq: "Home" }) {
      name
      vimeoId
      showHideVideoBtnText
      headingOne
      headingOneButtonText
      headingOneButtonPath
      subheading
      whatWeProvideManyHeading
      whatWeProvideBlock {
        id
        callToAction
        callToActionLink
        tagName
        whatWeProvideDescription
        whatWeProvideHeading
        pageImageBlock {
          asset {
            gatsbyImageData(width: 282, height: 134)
          }
          alt
        }
      }
      hasGallery
      galleryManyBlock {
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
    }
    latestNewsBlog: allSanityNews(limit: 4, sort: { publishDate: DESC }) {
      nodes {
        id
        _type
        newsTag
        newsBlogTitle: newsPostTitle
        newsContentExcerpt
        slug {
          current
        }
        newsBlogImg: pageImageBlock {
          alt
          asset {
            gatsbyImageData(width: 200, height: 134)
            url
          }
        }
        publishDate(formatString: "LL")
      }
    }
    eventBlogs: allSanityEventBlog(sort: { eventDate: ASC }) {
      totalCount
      nodes {
        id
        eventTitle
        eventExcerpt
        eventDate(formatString: "LL")
        slug {
          current
        }
        eventImg: eventImageBlock {
          alt
          asset {
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
    }
  }
`;

export default HomePage;

// a helper function Head used to generate SEO and include a script tag for SnapWidget
export function Head({ data }: HeadProps<HomePageQueryData>) {
  const { name } = data.homePage;
  return (
    <SEO title={name}>
      <script defer src="https://snapwidget.com/js/snapwidget.js" />
    </SEO>
  );
}
