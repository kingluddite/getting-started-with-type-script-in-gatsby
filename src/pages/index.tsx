// npm
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { PageProps, graphql, HeadProps } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

// components
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';
import Button from '../components/atoms/buttons/Button';
import SEO from '../components/shared/SEO';
import LayoutContainer from '../components/shared/layout/LayoutContainer';

// styles
import {
  StyledSection,
  PlayerWrapper,
  StyledSectionTitle,
  StyledProvideCardGrid,
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
  } = data.homePage;

  const [videoOpened, setVideoOpened] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playVideo = (e) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(true);
    setPlaying(true);
  };

  const hideVideo = (e) => {
    e.preventDefault();
    setVideoError(false);
    setVideoOpened(false);
    setPlaying(false);
  };

  return (
    <>
      <HeroHeading home>
        <Logo size="large" />
        <Logo size="textOnly" />
        <p>{subheading}</p>
        <div
          style={{
            display: `flex`,
            gap: `var(--size-dual-nudge)`,
          }}
        >
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
        </div>
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
          <StyledProvideCardGrid>aaa</StyledProvideCardGrid>
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
