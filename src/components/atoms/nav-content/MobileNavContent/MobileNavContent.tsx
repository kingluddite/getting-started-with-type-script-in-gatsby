// npm
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VisuallyHidden } from '@reach/visually-hidden';

// utils
import linkMapper from '@utils/linkMappers/linkMapper';

// images
import AsifaLogo from '@images/asifa.png';

// styles
import {
  StyledMenuButtonContainer,
  StyledToggleButton,
  StyledMenuSidebar,
  StyledMenuContainer,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledSocialContainer,
  StyledAsifaLogo,
  StyledSocialLink,
} from './styles';

// types
import type { MobileNavContentProps } from './types';

const MobileNavContent: React.FC<MobileNavContentProps> = ({
  navLinkData,
  socialMediaData,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <>
      {/* Container for the menu button */}
      <StyledMenuButtonContainer className="mobileNav">
        {/* Toggle button to open/close the menu */}
        <StyledToggleButton
          type="button"
          data-testid="toggle-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? `Close nav menu` : `Open nav menu`}
        >
          {/* Visually hidden text for screen readers */}
          <VisuallyHidden>
            {menuOpen ? `Open nav menu` : `Close nav menu`}
          </VisuallyHidden>
          {/* Visual indicator of menu open/close state */}
          <div className={menuOpen ? `open` : `close`} />
        </StyledToggleButton>
      </StyledMenuButtonContainer>

      {/* Sidebar for the menu */}
      <StyledMenuSidebar $open={menuOpen}>
        <StyledMenuContainer>
          {/* Heading for "About" section */}
          <StyledLinkHeading>About</StyledLinkHeading>
          {/* Container for links in "About" section */}
          <StyledLinkContainer>
            {/* Render links using LinkMapper utility function */}
            {linkMapper(navLinkData.about)}
          </StyledLinkContainer>

          {/* Heading for "Engage" section */}
          <StyledLinkHeading>Engage</StyledLinkHeading>
          {/* Container for links in "Engage" section */}
          <StyledLinkContainer>
            {/* Render links using LinkMapper utility function */}
            {linkMapper(navLinkData.engage)}
          </StyledLinkContainer>

          {/* Heading for "Programs" section */}
          <StyledLinkHeading>Programs</StyledLinkHeading>
          {/* Container for links in "Programs" section */}
          <StyledLinkContainer>
            {/* Render links using LinkMapper utility function */}
            {linkMapper(navLinkData.programs)}
          </StyledLinkContainer>

          {/* Heading for "Connect" section */}
          <StyledLinkHeading>Connect</StyledLinkHeading>
          {/* Container for links in "Connect" section */}
          <StyledLinkContainer>
            {/* Render links using LinkMapper utility function */}
            {linkMapper(navLinkData.forms)}
          </StyledLinkContainer>

          {/* Container for social media links */}
          <StyledSocialContainer>
            <div>
              {/* Link to ASIFA-Hollywood website */}
              <a
                href="https://www.asifa-hollywood.org/"
                target="_blank"
                rel="norefer noopener noreferrer"
              >
                {/* ASIFA-Hollywood logo */}
                <StyledAsifaLogo src={AsifaLogo} alt="ASIFA-Hollywood Logo" />
              </a>
            </div>
            {/* ASIFA-Hollywood logo */}
            {socialMediaData.map((i, index) => (
              <StyledSocialLink
                key={index + i.icon}
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Social media icon */}
                <FontAwesomeIcon icon={i.icon} />
              </StyledSocialLink>
            ))}
          </StyledSocialContainer>
        </StyledMenuContainer>
      </StyledMenuSidebar>
    </>
  );
};

export default MobileNavContent;
