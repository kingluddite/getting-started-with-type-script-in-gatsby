export interface NavLink {
  type: 'gatsby' | 'external';
  url: string;
  text: string;
}

export interface NavLinkData {
  about: NavLink[];
  engage: NavLink[];
  programs: NavLink[];
  forms: NavLink[];
}

const navLinkData: NavLinkData = {
  programs: [
    {
      type: `gatsby`,
      url: `/scholarships`,
      text: `Student Scholarship`,
    },
    {
      type: `gatsby`,
      url: `/past-scholarship-winners`,
      text: `Past Scholarship Winners`,
    },
    {
      type: `gatsby`,
      url: `/grants`,
      text: `Faculty Grants`,
    },
    {
      type: `gatsby`,
      url: `/student-animation-showcase`,
      text: `Student Animation Showcase`,
    },
    // {
    //   type: 'external',
    //   url: 'https://www.cafepress.com/',
    //   text: 'AEF Merch',
    // },
  ],
  engage: [
    {
      type: `gatsby`,
      url: `/forum`,
      text: `The Forum`,
    },
    {
      type: `gatsby`,
      url: `/events`,
      text: `Events`,
    },
    {
      type: `gatsby`,
      url: `/news`,
      text: `News`,
    },
    // {
    //   type: 'gatsby',
    //   url: '/blog',
    //   text: 'AEF Blog',
    // },
    // {
    //   type: 'external',
    //   url: 'http://tomsito.com/blog.php',
    //   text: "Tom's Blog",
    // },
    {
      type: `gatsby`,
      url: `/resources`,
      text: `Resources`,
    },
  ],
  about: [
    {
      type: `gatsby`,
      url: `/about`,
      text: `Who We Are`,
    },
    {
      type: `gatsby`,
      url: `/history`,
      text: `AEF History`,
    },
    {
      type: `gatsby`,
      url: `/legends`,
      text: `AEF Hall Of Fame`,
    },
  ],
  forms: [
    {
      type: `gatsby`,
      url: `/join`,
      text: `Join`,
    },
    {
      type: `gatsby`,
      url: `/contact`,
      text: `Contact`,
    },
  ],
};

export default navLinkData;
