// npm
import React from 'react';
import { PageProps, graphql } from 'gatsby';

// components
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';
import Button from '../components/atoms/buttons/Button';
// import { list, listItem} from '../styles/index.css';

type DataType = {
  homePage: {
    subheading: string;
  };
  //   allPerson: {
  //     nodes: {
  //       name: string
  //       first_name: string
  //       last_name: string
  //     }[]
  //   }
};
// const IndexPage = ({ data: { allPerson }}: PageProps<DataType>) => (
const HomePage = ({ data }: PageProps<DataType>) => {
  const { subheading, headingOneButtonPath, headingOneButtonText } =
    data.homePage;
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
        </div>
      </HeroHeading>
    </>
  );
};

// export const query = graphql`
//   query {
//     allPerson {
//       nodes {
//         name
//         first_name
//         last_name
//       }
//     }
//   }
// `

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
    }
  }
`;

export default HomePage;
