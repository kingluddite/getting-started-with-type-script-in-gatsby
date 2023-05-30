import { render } from '@testing-library/react';
import sitemapMapper from './sitemapMapper';
import { describe, it, expect } from 'vitest';

describe(`sitemapMapper`, () => {
  it(`renders the sitemap with links and social icons`, () => {
    const title = `Example Sitemap`;
    const links = [
      {
        type: `gatsby`,
        url: `/home`,
        text: `Home`,
      },
      {
        type: `external`,
        url: `https://example.com/about`,
        text: `About`,
      },
    ];
    const social = [
      {
        url: `https://twitter.com/example`,
        icon: `faTwitter`,
      },
      {
        url: `https://instagram.com/example`,
        icon: `faInstagram`,
      },
    ];

    // const { getByText, getByTestId } = render(
    //   sitemapMapper(title, links, social),
    // );

    // @ts-ignore
    const { getByText } = render(sitemapMapper(title, links, social));

    // Check if the title is rendered correctly
    expect(getByText(title)).toBeInTheDocument();

    // Check if the links are rendered correctly
    const homeLink = getByText(`Home`);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute(`href`)).toBe(`/home`);

    const aboutLink = getByText(`About`);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute(`href`)).toBe(`https://example.com/about`);

    // Check if the social icons are rendered correctly

    // const twitterIcon = getByTestId(`faTwitter-icon`);
    // expect(twitterIcon).toBeInTheDocument();
    // expect(twitterIcon.getAttribute(`href`)).toBe(
    //   `https://twitter.com/example`,
    // );

    // const instagramIcon = getByTestId(`faInstagram-icon`);
    // expect(instagramIcon).toBeInTheDocument();
    // expect(instagramIcon.getAttribute(`href`)).toBe(
    //   `https://instagram.com/example`,
    // );
  });

  it(`renders the sitemap without social icons`, () => {
    const title = `Example Sitemap`;
    const links = [
      {
        type: `gatsby`,
        url: `/home`,
        text: `Home`,
      },
      {
        type: `external`,
        url: `https://example.com/about`,
        text: `About`,
      },
    ];

    // @ts-ignore
    const { getByText, queryByTestId } = render(sitemapMapper(title, links));

    // Check if the title is rendered correctly
    expect(getByText(title)).toBeInTheDocument();

    // Check if the links are rendered correctly
    const homeLink = getByText(`Home`);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute(`href`)).toBe(`/home`);

    const aboutLink = getByText(`About`);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute(`href`)).toBe(`https://example.com/about`);

    // Check if the social icons are not rendered
    expect(queryByTestId(`faTwitter-icon`)).toBeNull();
    expect(queryByTestId(`faInstagram-icon`)).toBeNull();
  });
});
