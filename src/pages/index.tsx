import React from 'react';
import { PageProps, graphql } from 'gatsby';
import HeroHeading from '../components/molecules/HeroHeading';
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
  const { subheading } = data.homePage;
  return (
    <main>
      <HeroHeading home>
        <p>{subheading}</p>
      </HeroHeading>
      {/* <h1>{subheading}</h1> */}
      {/* <ul className={list}>
      {allPerson.nodes.map(person => (
        <li className={listItem} key={person.name}>{person.first_name} {person.last_name}</li>
      ))}
    </ul> */}
    </main>
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
