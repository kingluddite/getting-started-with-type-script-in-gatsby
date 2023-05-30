import { describe, it, expect } from 'vitest';
import navLinkData from './navLinksData';

describe(`navLinkData`, () => {
  it(`should contain the correct navigation link data`, () => {
    const expectedData = {
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

    expect(navLinkData).toEqual(expectedData);
  });
});
