// npm
import React from 'react';
import { Link } from 'gatsby';

// static data
import navLinkData from '@utils/data/nav-links';
import socialMediaData from '@utils/data/social-media';

// styles
import { StyledFooter } from './styles';

// images
import AEFLogoLight from '@svg/aef-lightmode-logo.svg';

// utils
import SitemapMapper from '@utils/SitemapMapper';

function Footer() {
  return (
    <StyledFooter>
      {/* Render logo */}
      <div className="logo">
        <Link to="/">
          <img src={AEFLogoLight} alt="AEF Logo" />
        </Link>
      </div>

      {/* Render copyright */}
      <div className="copyright">
        <p>copyright &copy; {new Date().getFullYear()}</p>
        <p>animation educators forum</p>
        <p>all rights reserved</p>
      </div>

      {/* Render sitemap */}
      <ul className="sitemap">
        {/* Map over nav link data to render sitemap sections */}
        {SitemapMapper(`About`, navLinkData.about)}
        {SitemapMapper(`Engage`, navLinkData.engage)}
        {SitemapMapper(`Programs`, navLinkData.programs)}

        {/* Pass additional social media data to SitemapSectionMapper for "Connect" section */}
        {SitemapMapper(`Connect`, navLinkData.forms, socialMediaData)}
      </ul>
    </StyledFooter>
  );
}

export default Footer;
