import React from 'react';
import { Link } from 'gatsby';

// data
import navLinkData from '../../../utils/data/nav-links';
// styles
import { StyledFooter } from './styles';
// images
// import AEFLogoLight from '../../../assets/svg/aef-lightmode-logo.svg';
// components
import SitemapSectionMapper from './SitemapSectionMapper';

function Footer() {
  return (
    <StyledFooter>
      <div className="logo">
        <Link to="/">
          link
          {/* <img src={AEFLogoLight} alt="AEF Logo" /> */}
        </Link>
      </div>
      <div className="copyright">
        <p>copyright &copy; {new Date().getFullYear()}</p>
        <p>animation educators forum</p>
        <p>all rights reserved</p>
      </div>
      <ul className="sitemap">
        {SitemapSectionMapper(`About`, navLinkData.about)}
        {/* {sitemapSectionMapper(`Engage`, navLinkData.engage)}
        {sitemapSectionMapper(`Programs`, navLinkData.programs)}
        {sitemapSectionMapper(`Connect`, navLinkData.forms, socialMediaData)} */}
      </ul>
    </StyledFooter>
  );
}

export default Footer;
