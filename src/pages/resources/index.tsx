// npm
import React, { useCallback, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// components
import SEO from '@shared/SEO';
import LayoutContainer from '@shared/layout/LayoutContainer';
import HeroHeading from '@components/molecules/HeroHeading';
import MediumCard from '@components/molecules/cards/MediumCard';
import ContentBlock from '@components/molecules/ContentBlock';
import Logo from '@components/atoms/Logo';

// images
// import Gallery from '../components/atoms/Gallery';
import ImageContainer from '@components/atoms/images/ImageContainer';

// styles
import { StyledForm, StyledSearchIcon, StyledSection } from './styles';
import { StyledInput } from '@components/atoms/forms/FormInput/styles';
import CardGridContainer from '@components/molecules/cards/CardGridContainer/styles';

// types
import { ResourcesPageProps } from './types';

function ResourcesPage({ data }: ResourcesPageProps) {
  const {
    headingOne,
    name,
    subheading,
    resourcesManyBlock,
    // galleryManyBlock,
    // hasGallery,
    pageImageBlock,
  } = data.resourcesPage;

  const [resources, setResources] = useState(resourcesManyBlock);
  const [searchTerm, setSearchTerm] = useState(``);

  const searchResources = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault?.();
      if (!searchTerm.trim()) {
        setResources(resourcesManyBlock);
      }
      const items = resourcesManyBlock?.filter((resource) =>
        resource?.resourceBlockHeading
          ?.trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()),
      );
      setResources(items);
    },
    [searchTerm, resourcesManyBlock],
  );

  useEffect(() => {
    const event = {} as React.FormEvent<HTMLFormElement>;
    searchResources(event);
  }, [searchTerm, searchResources]);

  return (
    <>
      <SEO title={name} />
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
        <StyledForm onSubmit={searchResources} role="search">
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
        {/* TODO: Add Search */}
        <CardGridContainer>
          {resources.map((r) => (
            <MediumCard
              cardType={r.resourceType}
              key={r.id}
              title={r.resourceBlockHeading}
              description={r.resourceDescription}
              href={r.callToActionLink}
              image={
                r?.resourceImg?.asset?.gatsbyImageData ? (
                  <GatsbyImage
                    image={r.resourceImg.asset.gatsbyImageData}
                    alt={r.resourceImg.alt}
                  />
                ) : (
                  <StaticImage
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/02/11/screen-shot-2018-03-02-at-12.23.53.png"
                    alt={r.resourceImg.alt}
                    height={134}
                    width={282}
                  />
                )
              }
            />
          ))}
        </CardGridContainer>
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
          <ContentBlock
            showCallToAction={true}
            callToActionLink="/contact"
            callToActionType="internal"
            callToActionTitle="Suggest a Resource"
          >
            <div style={{ fontWeight: `bold`, fontSize: `18px` }}>
              If you have a resource you would like to suggest please by
              clicking on the button below:
            </div>
          </ContentBlock>
        </StyledSection>
      </LayoutContainer>
    </>
  );
}

export default ResourcesPage;

export const query = graphql`
  query ResourcesPageQuery {
    resourcesPage: sanityPage(name: { eq: "Resources" }) {
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
      resourcesManyBlock {
        id
        resourceType
        resourceBlockHeading
        resourceDescription
        resourceImg: resourceImageBlock {
          alt
          asset {
            gatsbyImageData
          }
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
        }
        callToAction
        callToActionLink
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
