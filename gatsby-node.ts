import { GatsbyNode, CreatePagesArgs } from 'gatsby';
import * as path from 'path';

// Define interfaces
interface Node {
  [key: string]: any;
  slug: {
    current: string;
  };
}

interface DataNode {
  [key: string]: any;
  totalCount: number;
  nodes: Node[];
}

interface GraphQLResponse {
  [key: string]: DataNode;
}

// Extend CreatePagesArgs interface to include graphql and actions
interface CreatePagesParams extends CreatePagesArgs {
  graphql: any;
  actions: any;
}

/**
 * Creates pages from the fetched data.
 */
async function createPagesFromData({
  data,
  actions,
  template,
  basePath,
  pagePath,
}: {
  data: DataNode;
  actions: CreatePagesArgs['actions'];
  template: string;
  basePath: string;
  pagePath: string;
}) {
  if (!data || !data.nodes) {
    throw new Error(`Failed to fetch data.`);
  }

  // Create individual pages for each node
  data.nodes.forEach((node: Node) => {
    actions.createPage({
      path: `${basePath}/${node.slug.current}`,
      component: template,
      context: {
        slug: node.slug.current,
      },
    });
  });

  // Create paginated index pages
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE || `10`, 10);
  const pageCount = Math.ceil(data.totalCount / pageSize);

  Array.from({
    length: pageCount,
  }).forEach((_, i) => {
    actions.createPage({
      path: `${pagePath}/${i + 1}`,
      component: path.resolve(`./src/pages/${pagePath}/index.tsx`),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

/**
 * Creates pages for past winners.
 */
async function turnPastWinnersIntoPages({
  graphql,
  actions,
}: CreatePagesParams) {
  const pastWinnersTemplate = path.resolve(
    `./src/templates/PastScholarshipWinnerTemplate/PastScholarshipWinnerTemplate.tsx`,
  );

  try {
    // Fetch past winners data from GraphQL
    const { data }: { data: GraphQLResponse } = await graphql(`
      query GetPastWinners {
        pastWinners: allSanityPastWinnerBlog {
          totalCount
          nodes {
            pastWinnerTitle
            slug {
              current
            }
          }
        }
      }
    `);

    // Create pages from fetched data
    await createPagesFromData({
      data: data.pastWinners,
      actions,
      template: pastWinnersTemplate,
      basePath: `past-scholarship-winners`,
      pagePath: `past-scholarship-winners`,
    });
  } catch (error) {
    console.error(`Error creating past winners pages:`, error);
  }
}

/**
 * Creates pages for news.
 */
async function turnNewsIntoPages({ graphql, actions }: CreatePagesParams) {
  const newsTemplate = path.resolve(
    `./src/templates/NewsTemplate/NewsTemplate.tsx`,
  );

  try {
    // Fetch news data from GraphQL
    const { data }: { data: GraphQLResponse } = await graphql(`
      query GetNews {
        news: allSanityNews {
          totalCount
          nodes {
            newsPostTitle
            slug {
              current
            }
          }
        }
      }
    `);

    // Create pages from fetched data
    await createPagesFromData({
      data: data.news,
      actions,
      template: newsTemplate,
      basePath: `news`,
      pagePath: `news`,
    });
  } catch (error) {
    console.error(`Error creating news pages:`, error);
  }
}

/**
 * Creates pages for events.
 */
async function turnEventsIntoPages({ graphql, actions }: CreatePagesParams) {
  const eventsTemplate = path.resolve(
    `./src/templates/EventTemplate/EventTemplate.tsx`,
  );

  try {
    // Fetch events data from GraphQL
    const { data }: { data: GraphQLResponse } = await graphql(`
      query GetEvents {
        events: allSanityEventBlog {
          totalCount
          nodes {
            eventTitle
            slug {
              current
            }
          }
        }
      }
    `);

    // Create pages from fetched data
    await createPagesFromData({
      data: data.events,
      actions,
      template: eventsTemplate,
      basePath: `events`,
      pagePath: `events`,
    });
  } catch (error) {
    console.error(`Error creating events pages:`, error);
  }
}

// GatsbyNode's createPages function
const createPages: GatsbyNode['createPages'] = async (params) => {
  try {
    // Create pages for news, events, and past winners
    await Promise.all([
      turnNewsIntoPages(params),
      turnEventsIntoPages(params),
      turnPastWinnersIntoPages(params),
    ]);
  } catch (error) {
    console.error(`Error creating pages:`, error);
  }
};
