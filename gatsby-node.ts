import path from 'path';

// arg object: params
async function turnPastWinnersIntoPages({ graphql, actions }) {
  // grab template for this page
  const pastWinnersTemplate = path.resolve(
    `./src/templates/PastScholarshipWinners.js`,
  );

  // query all news posts
  const { data } = await graphql(`
    query {
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

  // loop over each news posts and create a page for that news post
  data.pastWinners.nodes.forEach((pastWinner) => {
    actions.createPage({
      // url for news page
      path: `past-scholarship-winners/${pastWinner.slug.current}`,
      component: pastWinnersTemplate,
      context: {
        slug: pastWinner.slug.current,
      },
    });
  });

  // Determine how many pages there are based on how many news
  //  there are, and how many you need per page
  // (note: since we are using an environment variable we need to
  //   convert the default environment variable string to a number)
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.pastWinners.totalCount / pageSize);

  // loop from 1 to n and create the pages for them
  Array.from({
    length: pageCount,
  }).forEach((_, i) => {
    actions.createPage({
      path: `/past-scholarship-winners/${i + 1}`,
      component: path.resolve(`./src/pages/past-scholarship-winners.js`),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

// arg object: params
async function turnNewsIntoPages({ graphql, actions }) {
  // grab template for this page
  const newsTemplate = path.resolve(`./src/templates/News.js`);

  // query all news posts
  const { data } = await graphql(`
    query {
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

  // loop over each news posts and create a page for that news post
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

  // Determine how many pages there are based on how many news
  //  there are, and how many you need per page
  // (note: since we are using an environment variable we need to
  //   convert the default environment variable string to a number)
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.news.totalCount / pageSize);

  // loop from 1 to n and create the pages for them
  Array.from({
    length: pageCount,
  }).forEach((_, i) => {
    actions.createPage({
      path: `/news/${i + 1}`,
      component: path.resolve(`./src/pages/news.js`),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

// arg object: params
// async function turnAefBlogIntoPages({ graphql, actions }) {
//   // note: we are using pagination
//   // grab template for this page
//   const aefBlogTemplate = path.resolve('./src/templates/AefBlog.js')
//
//   // query all news posts
//   const { data } = await graphql(`
//     query {
//       aefBlog: allSanityAefBlog {
//         totalCount
//         nodes {
//           aefBlogPostTitle
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `)
//
//   // Turn each blog into their own page
//   data.aefBlog.nodes.forEach(aefBlogPost => {
//     actions.createPage({
//       // url for news page
//       path: `blog/${aefBlogPost.slug.current}`,
//       component: aefBlogTemplate,
//       context: {
//         slug: aefBlogPost.slug.current,
//       },
//     })
//   })
//
//   // Determine how many pages there are based on how many blogs
//   //  there are, and how many you need per page
//   // (note: since we are using an environment variable we need to
//   //   convert the default environment variable string to a number)
//   const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
//   const pageCount = Math.ceil(data.aefBlog.totalCount / pageSize)
//   // console.log(
//   //   `There are ${data.aefBlog.totalCount} total blogs. And we have ${pageCount} pages with ${pageSize} per page`
//   // )
//   // loop from 1 to n and create the pages for them
//   Array.from({ length: pageCount }).forEach((_, i) => {
//     // console.log(`Creating page ${i}`)
//     actions.createPage({
//       path: `/blog/${i + 1}`,
//       component: path.resolve('./src/pages/blog.js'),
//       context: {
//         skip: i * pageSize,
//         currentPage: i + i,
//         pageSize,
//       },
//     })
//   })
// }

// arg object: params
async function turnEventsIntoPages({ graphql, actions }) {
  // grab template for this page
  const eventsTemplate = path.resolve(`./src/templates/Event.tsx`);

  // query all news posts
  const { data } = await graphql(`
    query {
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

  // loop over each news posts and create a page for that news post
  data.events.nodes.forEach((event) => {
    actions.createPage({
      // url for news page
      path: `events/${event.slug.current}`,
      component: eventsTemplate,
      context: {
        slug: event.slug.current,
      },
    });
  });

  // Determine how many pages there are based on how many blogs
  //  there are, and how many you need per page
  // (note: since we are using an environment variable we need to
  //   convert the default environment variable string to a number)
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.events.totalCount / pageSize);
  // console.log(
  //   `There are ${data.events.totalCount} total events. And we have ${pageCount} pages with ${pageSize} per page`
  // )
  // loop from 1 to n and create the pages for them
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

export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  // await Promise.all([turnNewsIntoPages(params), turnBloggerIntoPages(params)])
  await Promise.all([
    // turnNewsIntoPages(params),
    // turnAefBlogIntoPages(params),
    turnEventsIntoPages(params),
    // turnPastWinnersIntoPages(params),
  ]);
}
