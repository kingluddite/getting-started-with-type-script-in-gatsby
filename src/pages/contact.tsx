import React from 'react';
import { PageProps, graphql } from 'gatsby';
import HeroHeading from '@components/molecules/HeroHeading';
import Logo from '@components/atoms/Logo';
// styles
import {
  StyledForm,
  StyledFormContent,
  StyledFormRow,
  StyledSection,
} from './styles/ContactStyles';

type DataType = {
  contactPage: {
    subheading: string;
  };
};

const ContactPage = ({ data }: PageProps<DataType>) => {
  const { subheading } = data.contactPage;
  return (
    <>
      <HeroHeading>
        <Logo />
        <p>{subheading}</p>
      </HeroHeading>
      <StyledSection>
        <StyledForm>
          <StyledFormContent>
            <StyledFormRow>Contact Form</StyledFormRow>
          </StyledFormContent>
        </StyledForm>
      </StyledSection>
    </>
  );
};

export const query = graphql`
  query ContactPageQuery {
    contactPage: sanityPage(name: { eq: "Contact" }) {
      name
      headingOne
      subheading
      instructions
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

export default ContactPage;
