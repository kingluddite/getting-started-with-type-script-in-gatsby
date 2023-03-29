// npm
import React from 'react';
import { Link } from 'gatsby';

// data
import socialMediaData from '../../../utils/data/social-media';
import navLinkData from '../../../utils/data/nav-links';

// components
import DesktopNavContent from '../../atoms/nav-content/DesktopNavContent';
import MobileNavContent from '../../atoms/nav-content/MobileNavContent';

// styles
import { StyledNav, StyledAEFLogo } from './styles';

// images
import AEFLogoLight from '../../../assets/svg/aef-full-lightmode-logo-lg-top-tag.svg';

function Nav({ location, menuOpen, setMenuOpen }) {
  return (
    <StyledNav>
      <Link to="/">
        <StyledAEFLogo src={AEFLogoLight} alt="AEF Logo" />
      </Link>
      <DesktopNavContent
        location={location}
        socialMediaData={socialMediaData}
        navLinkData={navLinkData}
      />
      <MobileNavContent
        socialMediaData={socialMediaData}
        navLinkData={navLinkData}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </StyledNav>
  );
}

export default Nav;
