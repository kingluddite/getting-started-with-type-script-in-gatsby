import React from 'react';
import { Link } from 'gatsby';

// Import data
import navLinkData from '../../../utils/data/nav-links';
import socialMediaData from '../../../utils/data/social-media';

// Import styles
import { StyledFooter } from './styles';

// Import images
import AEFLogoLight from '../../../assets/svg/aef-lightmode-logo.svg';

// Import components
import SitemapSectionMapper from './SitemapSectionMapper';

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
        {SitemapSectionMapper(`About`, navLinkData.about)}
        {SitemapSectionMapper(`Engage`, navLinkData.engage)}
        {SitemapSectionMapper(`Programs`, navLinkData.programs)}

        {/* Pass additional social media data to SitemapSectionMapper for "Connect" section */}
        {SitemapSectionMapper(`Connect`, navLinkData.forms, socialMediaData)}
      </ul>
    </StyledFooter>
  );
}

export default Footer;
