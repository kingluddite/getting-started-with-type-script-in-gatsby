// npm
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { PageProps, graphql, HeadProps } from 'gatsby';
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

// components
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';
import Button from '../components/atoms/buttons/Button';
import SEO from '../components/shared/SEO';
import LayoutContainer from '../components/shared/layout/LayoutContainer';
import MediumCard from '../components/molecules/cards/MediumCard';
import Gallery from '../components/atoms/images/Gallery';

// styles
import {
  StyledSection,
  PlayerWrapper,
  StyledSectionTitle,
  StyledProvideCardGrid,
  StyledFlexContainer,
} from './styles/HomeStyles';

type DataProps = {
  homePage: {
    name: string;
    subheading: string;
    headingOneButtonPath: string;
    headingOneButtonText: string;
    vimeoId: string;
    videoOpened: boolean;
    videoError: boolean;
    playing: boolean;
    showHideVideoBtnText: boolean;
    whatWeProvideManyHeading: string;
    whatWeProvideBlock: Array<{
      id: string;
      link: string;
      whatWeProvideHeading: string;
      callToActionLink: string;
      tagName: string;
      pageImageBlock: {
        asset: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        };
        alt: string;
      };
    }>;
    hasGallery: boolean;
    galleryManyBlock: Array<{
      asset: {
        id: string;
        gatsbyImageData: IGatsbyImageData;
      };
      alt: string;
    }>;
  };
};

const HomePage = ({ data }: PageProps<DataProps>) => {
  const {
    subheading,
    headingOneButtonPath,
    headingOneButtonText,
    vimeoId,
    showHideVideoBtnText,
    whatWeProvideManyHeading,
    whatWeProvideBlock,
    hasGallery,
    galleryManyBlock,
  } = data.homePage;

  // const latestNewsBlog = data.latestNewsBlog.nodes;
  // const events = data.eventBlogs.nodes;

  const [videoOpened, setVideoOpened] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(true);
    setPlaying(true);
  };

  const hideVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(false);
    setPlaying(false);
  };

  const images = (galleryManyBlock ?? []).map((item) => ({
    // id: item.asset.id,
    asset: item.asset.gatsbyImageData,
    alt: item.alt,
  }));

  return (
    <>
      <HeroHeading home>
        <Logo size="large" />
        <Logo size="textOnly" />
        <p>{subheading}</p>
        <StyledFlexContainer>
          <Button actionType="link" link={headingOneButtonPath}>
            {headingOneButtonText}
          </Button>
          {vimeoId && !videoOpened ? (
            <Button actionType="button" action={playVideo}>
              <FontAwesomeIcon icon={faPlay} /> Play {showHideVideoBtnText}
            </Button>
          ) : null}
          {vimeoId && videoOpened ? (
            <Button actionType="button" action={hideVideo}>
              <FontAwesomeIcon icon={faStop} /> Hide {showHideVideoBtnText}
            </Button>
          ) : null}
        </StyledFlexContainer>
      </HeroHeading>
      <LayoutContainer hasSectionGaps>
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
        {vimeoId && videoOpened && videoError ? (
          <StyledSection>
            <p>There was an issue playing this video</p>
          </StyledSection>
        ) : null}
        <StyledSection>
          <StyledSectionTitle>{whatWeProvideManyHeading}</StyledSectionTitle>
          <StyledProvideCardGrid>
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
                      src="./img/grants_home_card.jpeg"
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
          {hasGallery ? <Gallery images={images} /> : null}
        </StyledSection>
      </LayoutContainer>
    </>
  );
};

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
  }
`;

export default HomePage;

export function Head({ data }: HeadProps<DataProps>) {
  const { name } = data.homePage;
  return (
    <SEO title={name}>
      <script defer src="https://snapwidget.com/js/snapwidget.js" />
    </SEO>
  );
}
