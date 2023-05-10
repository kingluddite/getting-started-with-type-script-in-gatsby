# modularizing pages in gatsby
## you can move the GraphQL query to its own file and import it into your Gatsby page component. Here's an example of how you can do it:

1. Create a separate file for your GraphQL query, for example, aboutPageQuery.ts:

```
import { graphql } from 'gatsby';

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    aboutPage: sanityPage(name: { eq: "About" }) {
      name
      headingOne
      subheading
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
      // rest of the query
    }
  }
`;
```

2. In your page component, import the aboutPageQuery and use it as the query export:

```
import React from 'react';
import { PageProps } from 'gatsby';
import { aboutPageQuery } from '../queries/aboutPageQuery';
import HeroHeading from '../components/molecules/HeroHeading';
import Logo from '../components/atoms/Logo';
import SEO from '../components/shared/SEO';
// styles
import { StyledSection, StyledSectionTitle } from './styles/AboutStyles';

type DataType = {
  aboutPage: {
    subheading: string;
  };
};

const AboutPage = ({ data }: PageProps<DataType>) => {
  const {
    name,
    headingOne,
    subheading,
    // headingTwo,
    // whoWeAreImg,
    // missionTextBlock,
    quoteManyBlock,
    boardMemberManyHeading,
    boardMemberBlock,
    galleryManyBlock,
    hasGallery,
    pageImageBlock,
  } = data.aboutPage;

  return (
    <>
      <HeroHeading>
        <Logo />
        <p>{subheading}</p>
      </HeroHeading>
      <StyledSection>
        <StyledSectionTitle>Hello</StyledSectionTitle>
      </StyledSection>
    </>
  );
};

export { aboutPageQuery };
export default AboutPage;
```

3. In your Gatsby gatsby-node.js file, update the page creation function to pass the imported aboutPageQuery to the graphql function:

```
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const aboutPage = await graphql(aboutPageQuery); // <-- use the imported query here

  if (aboutPage.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  createPage({
    path: '/about',
    component: path.resolve('src/pages/AboutPage.tsx'),
    context: {
      data: aboutPage.data,
    },
  });
};
```

Note that you need to import the aboutPageQuery into your gatsby-node.js file as well. You can do this using require or using ES modules syntax.

## can i put gatsby pages in their own folder to separate the graphql and styled-components inside that folder?

Yes, you can create a separate folder for each Gatsby page and include all the necessary files for that page, such as GraphQL queries and styled-components, within that folder. This approach can help organize your codebase and make it easier to locate and modify specific pages.

To create a Gatsby page in its own folder, you can follow these steps:

Create a new folder under the src/pages directory with a name that matches the desired URL path for the page. For example, if you want to create a page with the URL path /about, create a folder named about under src/pages.

Inside the new folder, create a new file named index.js or index.tsx for TypeScript.

Write the necessary code for the page in the index.js or index.tsx file. This can include importing and using styled-components, importing and using GraphQL queries, and defining the page's React component.

If the page requires a GraphQL query, create a new file named query.graphql inside the page folder and write the GraphQL query in that file.

Import the GraphQL query into the index.js or index.tsx file and use it to fetch data for the page.

## example for about page
For example, if you want to create a Gatsby page for the /about URL path with styled-components and a GraphQL query, you could follow these steps:

Create a new folder named about under src/pages.

Inside the about folder, create a new file named index.js or index.tsx.

Define the React component for the page in the index.js or index.tsx file, and import any necessary dependencies, such as gatsby and styled-components.

```
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const AboutPage = ({ data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <>
      <Title>{title}</Title>
      <p>This is the about page.</p>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
```

* Create a new file named query.graphql in the about folder and write the GraphQL query to fetch data for the page.

```
query AboutPageQuery {
  site {
    siteMetadata {
      title
    }
  }
}
```

* Import the GraphQL query into the index.js or index.tsx file and use it to fetch data for the page.

```
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const AboutPage = ({ data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <>
      <Title>{title}</Title>
      <p>This is the about page.</p>
    </>
  );
};

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
```

## To use page queries for multiple pages, you can create a separate GraphQL query for each page and import them into gatsby-node.js and use them in the createPage function as follows:

1. Create a GraphQL query for each page in a separate file within the respective page folder. For example, if you have an About page, create a file called aboutPageQuery.js inside the src/pages/about folder.

```
import { graphql } from 'gatsby';

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    ...
  }
`;
```

2. Import the queries into gatsby-node.js and use them in the createPage function for each page.

```
const path = require('path');
const { aboutPageQuery } = require('./src/pages/about/aboutPageQuery');
const { blogPageQuery } = require('./src/pages/blog/blogPageQuery');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const aboutPage = await graphql(aboutPageQuery);
  const blogPage = await graphql(blogPageQuery);

  // Handle errors

  createPage({
    path: '/about',
    component: path.resolve('src/pages/about/AboutPage.tsx'),
    context: {
      data: aboutPage.data,
    },
  });

  createPage({
    path: '/blog',
    component: path.resolve('src/pages/blog/BlogPage.tsx'),
    context: {
      data: blogPage.data,
    },
  });
};
```
* 
Make sure to adjust the paths and file names to match your project structure.

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── shared/
├── pages/
│   ├── about/
│   │   ├── index.tsx
│   │   ├── queries.ts
│   │   └── styles.ts
│   ├── contact/
│   │   ├── index.tsx
│   │   ├── queries.ts
│   │   └── styles.ts
│   └── index.tsx
└── templates/
    ├── blog-post.tsx
    └── blog.tsx
```

## why is importing gatsby page queries more tricky than importing graphql into components?

Importing Gatsby page queries is more tricky than importing GraphQL into components because Gatsby page queries are executed at build time, not at runtime like regular GraphQL queries in components. This means that the data returned by a page query is not available until after the build process completes.

To work around this, Gatsby requires that page queries be placed inside the pages themselves, rather than in separate GraphQL files. This way, Gatsby knows exactly where to find each page query and can execute them during the build process. 

While it is possible to extract page queries to separate files, it requires some additional configuration and setup to ensure that Gatsby can still find and execute them during the build process.

## To use the external page query in your about page component, you would first need to export the query in your aboutPageQuery.js file:

```
import { graphql } from 'gatsby'

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    // your query goes here
  }
`
```

