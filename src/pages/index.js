import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { graphql } from 'gatsby';
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';
// const IndexPage = ({ data: { allPerson }}: PageProps<DataType>) => (
const HomePage = ({ data }) => {
    const { subheading } = data.homePage;
    return (_jsx("main", { children: _jsxs(HeroHeading, { home: true, children: [_jsx(Logo, { size: "large" }), _jsx(Logo, { size: "textOnly" }), _jsx("p", { children: subheading })] }) }));
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
export const query = graphql `
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
