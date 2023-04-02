import { graphql, useStaticQuery } from 'gatsby';

// TODO: Add image
export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          # image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
