import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

async function turnPastWinnersIntoPages({ graphql, actions }) {
  const pastWinnersTemplate = path.resolve(
    `./src/templates/PastScholarshipWinner/PastScholarshipWinner.tsx`,
  );

  const { data } = await graphql(`
    {
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
      component: path.resolve(`./src/pages/past-scholarship-winners/index.tsx`),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

async function turnNewsIntoPages({ graphql, actions }) {
  const newsTemplate = path.resolve(`./src/templates/News/News.tsx`);

  const { data } = await graphql(`
    {
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
}

async function turnEventsIntoPages({ graphql, actions }) {
  const eventsTemplate = path.resolve(`./src/templates/Event/Event.tsx`);

  const { data } = await graphql(`
    {
      events: allSanityEventBlog {
        nodes {
          eventTitle
          slug {
            current
          }
        }
      }
    }
  `);

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
    // console.log(`Creating page ${i}`)
    actions.createPage({
      path: `/events/${i + 1}`,
      component: path.resolve(`./src/pages/events/index.tsx`),
      context: {
        skip: i * pageSize,
        currentPage: i + i,
        pageSize,
      },
    });
  });
}

export const createPages: GatsbyNode['createPages'] = async (params) => {
  await Promise.all([
    turnNewsIntoPages(params),
    turnEventsIntoPages(params),
    turnPastWinnersIntoPages(params),
  ]);
};
