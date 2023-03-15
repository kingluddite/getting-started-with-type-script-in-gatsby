import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
}); // default setting but good to be explicit

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Getting Started with TypeScript in Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-vanilla-extract`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: `production`,
      watchMode: true,
      overlayDrafts: !process.env.production,
      token: process.env.SANITY_TOKEN,
    },
  },
]
};

export default config;
