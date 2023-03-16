import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
import path from "path";
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  `node_modules`,
  `gatsby`,
  `dist`,
  `utils`,
  `eslint-rules`
);

dotenv.config({
  path: `.env`,
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
  plugins: [
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-image`,
    `gatsby-plugin-pnpm`,
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
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        rulePaths: [gatsbyRequiredRules],
        extensions: [`js`, `jsx`, `ts`, `tsx`],
        exclude: [`node_modules`, `bower_components`, `.cache`, `public`],
        stages: [`develop`],
        emitWarning: true,
        failOnError: false,
      },
    },
  ],
};

export default config;
