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
import netlifyDataEncoder from '@utils/netlifyDataEncoder/netlifyDataEncoder';
import Logo from '@components/atoms/Logo';

// images
import Gallery from '@components/atoms/images/Gallery';
import ImageContainer from '@components/atoms/images/ImageContainer';
import {
  StyledForm,
  StyledFormContent,
  StyledFormRow,
  StyledInstructions,
  StyledSection,
} from './styles';
import { JoinPageQuery } from './types';

// types

function JoinPage({ data }: { data: JoinPageQuery }) {
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
    galleryManyBlock,
    hasGallery,
  } = data.joinPage;

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
          name="join"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={handleSubmit(formSubmit)}
        >
          <input type="hidden" name="form-name" value="join" />
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
              label="Title*"
              id="title"
              register={register}
              type="text"
              placeholder="Professor, adjunct, admin..."
              required={{
                required: `A title or role is required.`,
              }}
              errors={errors}
            />
            <FormInput
              label="School*"
              id="school"
              register={register}
              type="text"
              required={{
                required: `A school name is required.`,
              }}
              errors={errors}
            />
            <FormInput
              label="Comments"
              id="comments"
              register={register}
              placeholder="Add a message…"
              errors={errors}
              isTextarea
              rows={16}
            />
            {/* <StyledCheckboxContainer> */}
            {/*   <FormInput */}
            {/*     type="checkbox" */}
            {/*     id="aefMember" */}
            {/*     register={register} */}
            {/*     label="I want to become an active member of the AEF" */}
            {/*   /> */}
            {/*   <FormInput */}
            {/*     type="checkbox" */}
            {/*     id="getInvolved" */}
            {/*     register={register} */}
            {/*     label="I want to get involved, but not join" */}
            {/*   /> */}
            {/* </StyledCheckboxContainer> */}
            <Button type="submit">Submit</Button>
          </StyledFormContent>
        </StyledForm>

        <StyledSection>
          {hasGallery ? <Gallery images={galleryManyBlock} /> : null}
        </StyledSection>
      </LayoutContainer>
    </>
  );
}

export default JoinPage;

export function Head({ data }: HeadProps<JoinPageQuery>) {
  const { name } = data.joinPage;
  return <SEO title={name}></SEO>;
}

export const query = graphql`
  query JoinPageQuery {
    joinPage: sanityPage(name: { eq: "Join" }) {
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
