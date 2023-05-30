import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';
import path from 'path';
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  `node_modules`,
  `gatsby`,
  `dist`,
  `utils`,
  `eslint-rules`,
);

dotenv.config({
  path: `.env`,
}); // default setting but good to be explicit

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Animation Educators Forum`,
    description: `The Animation Educator's Forum is dedicated to the preservation and promotion of animation through education. Our members, with their diverse backgrounds in both the animation and educational fields, are focused on extending their knowledge and experience to others within the burgeoning animation community, worldwide.`,
    siteUrl: `https://animationeducatorsforum.org/`,
    author: `Oblique`,
    twitterUsername: `@aeforum`,
    youtube: `tbd`,
    instagram: `tbd`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `src`, `pages`),
        ignore: [`**/styles.tsx`, `**/types.ts`, `**/mockData.ts`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    // without this, errors on build with tsconfig!!!
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/svg/`,
        },
      },
    },
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
