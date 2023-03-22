import React from 'react';
import { PageProps, graphql } from 'gatsby';
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';

type DataType = {
  aboutPage: {
    subheading: string;
  };
};

const AboutPage = ({ data }: PageProps<DataType>) => {
  const { subheading } = data.aboutPage;
  return (
    <>
      <HeroHeading>
        <Logo />
        <p>{subheading}</p>
      </HeroHeading>
    </>
  );
};

export const query = graphql`
  query AboutPageQuery {
    aboutPage: sanityPage(name: { eq: "About" }) {
      name
      subheading
    }
  }
`;

export default AboutPage;
