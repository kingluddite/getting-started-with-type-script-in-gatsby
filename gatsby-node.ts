import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

async function turnPastWinnersIntoPages({ graphql, actions }) {
  const pastWinnersTemplate = path.resolve(
    `./src/templates/PastScholarshipWinnerTemplate/PastScholarshipWinnerTemplate.tsx`,
  );

  try {
    const { data } = await graphql(`
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

    if (!data || !data.pastWinners || !data.pastWinners.nodes) {
      throw new Error(`Failed to fetch past winners data.`);
    }

    data.pastWinners.nodes.forEach((pastWinner) => {
      actions.createPage({
        path: `past-scholarship-winners/${pastWinner.slug.current}`,
        component: pastWinnersTemplate,
        context: {
          slug: pastWinner.slug.current,
        },
      });
    });

    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE || `10`);
    const pageCount = Math.ceil(data.pastWinners.totalCount / pageSize);

    Array.from({
      length: pageCount,
    }).forEach((_, i) => {
      actions.createPage({
        path: `/past-scholarship-winners/${i + 1}`,
        component: path.resolve(
          `./src/pages/past-scholarship-winners/index.tsx`,
        ),
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
        },
      });
    });
  } catch (error) {
    console.error(`Error creating past winners pages:`, error);
  }
}

async function turnNewsIntoPages({ graphql, actions }) {
  const newsTemplate = path.resolve(
    `./src/templates/NewsTemplate/NewsTemplate.tsx`,
  );

  try {
    const { data } = await graphql(`
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

    if (!data || !data.news || !data.news.nodes) {
      throw new Error(`Failed to fetch news data.`);
    }

    data.news.nodes.forEach((newsPost) => {
      actions.createPage({
        // url for news page
        path: `news/${newsPost.slug.current}`,
        component: newsTemplate,
        context: {
          slug: newsPost.slug.current,
        },
      });
    });

    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE || `10`);
    const pageCount = Math.ceil(data.news.totalCount / pageSize);

    Array.from({
      length: pageCount,
    }).forEach((_, i) => {
      actions.createPage({
        path: `/news/${i + 1}`,
        component: path.resolve(`./src/pages/news/index.tsx`),
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
        },
      });
    });
  } catch (error) {
    console.error(`Error creating news pages:`, error);
  }
}

async function turnEventsIntoPages({ graphql, actions }) {
  const eventsTemplate = path.resolve(
    `./src/templates/EventTemplate/EventTemplate.tsx`,
  );

  try {
    const { data } = await graphql(`
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

    if (!data || !data.events || !data.events.nodes) {
      throw new Error(`Failed to fetch events data.`);
    }

    data.events.nodes.forEach((event) => {
      actions.createPage({
        path: `events/${event.slug.current}`,
        component: eventsTemplate,
        context: {
          slug: event.slug.current,
        },
      });
    });

    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE || `10`);
    const pageCount = Math.ceil(data.events.totalCount / pageSize);

    Array.from({
      length: pageCount,
    }).forEach((_, i) => {
      actions.createPage({
        path: `/events/${i + 1}`,
        component: path.resolve(`./src/pages/events/index.tsx`),
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
        },
      });
    });
  } catch (error) {
    console.error(`Error creating events pages:`, error);
  }
}

export const createPages: GatsbyNode['createPages'] = async (params) => {
  try {
    await Promise.all([
      turnNewsIntoPages(params),
      turnEventsIntoPages(params),
      turnPastWinnersIntoPages(params),
    ]);
  } catch (error) {
    console.error(`Error creating pages:`, error);
  }
};
