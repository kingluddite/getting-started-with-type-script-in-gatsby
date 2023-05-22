// npm
import React from 'react';
import { navigate, graphql, HeadProps } from 'gatsby';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

// components
import SEO from '@shared/SEO';
import LayoutContainer from '@shared/layout/LayoutContainer';
import HeroHeading from '@components/molecules/HeroHeading';
import Button from '@components/atoms/buttons/Button';
import FormInput from '@forms/FormInput';
// import Gallery from '../components/atoms/Gallery';
import netlifyDataEncoder from '@utils/netlifyDataEncoder';
import Logo from '@components/atoms/Logo';

// images
import ImageContainer from '@components/atoms/images/ImageContainer';

// styles
import {
  StyledForm,
  StyledFormContent,
  StyledFormRow,
  StyledInstructions,
  StyledSection,
} from './styles';

// types
import { ContactPageQuery } from './types';

function ContactPage({ data }: { data: ContactPageQuery }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    // name,
    headingOne,
    subheading,
    instructions,
    pageImageBlock,
    // galleryManyBlock,
    // hasGallery,
  } = data.contactPage;

  const formSubmit: SubmitHandler<FieldValues> = (formData, e) => {
    const form = e?.target as HTMLFormElement;
    fetch(`/`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/x-www-form-urlencoded`,
      },
      body: netlifyDataEncoder({
        'form-name': form.getAttribute(`name`),
        ...formData,
      }),
    })
      .then(() => {
        const action = form.getAttribute(`action`);
        if (action) {
          navigate(action);
        }
      })
      /*eslint-disable */
      .catch((error) => alert(error));
    /* eslint-enable */
  };

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
      </HeroHeading>
      <StyledInstructions>
        <em>{instructions}</em>
      </StyledInstructions>
      <LayoutContainer hasSectionGaps>
        <StyledForm
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={handleSubmit(formSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <StyledFormContent>
            <StyledFormRow>
              <FormInput
                label="First Name*"
                id="firstName"
                register={register}
                type="text"
                required={{
                  required: `First name is required.`,
                }}
                errors={errors}
              />
              <FormInput
                label="Last Name*"
                id="lastName"
                register={register}
                type="text"
                required={{
                  required: `Last name is required.`,
                }}
                errors={errors}
              />
            </StyledFormRow>
            <FormInput
              label="Email*"
              id="email"
              register={register}
              type="email"
              placeholder="info@example.com"
              required={{
                required: `A valid email is required.`,
                pattern: /^\S+@\S+$/i,
              }}
              errors={errors}
            />
            <FormInput
              label="Message*"
              id="message"
              register={register}
              placeholder="Write something…"
              required={{
                required: `Please let us know what you are inquiring about.`,
              }}
              errors={errors}
              isTextarea
              rows={16}
            />
            <Button type="submit">Submit</Button>
          </StyledFormContent>
        </StyledForm>
        <StyledSection>
          {/* {hasGallery ? <Gallery images={galleryManyBlock} /> : null} */}
        </StyledSection>
      </LayoutContainer>
    </>
  );
}

export default ContactPage;

// a helper function Head used to generate SEO
export function Head({ data }: HeadProps<ContactPageQuery>) {
  const { name } = data.contactPage;
  return <SEO title={name}></SEO>;
}

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
