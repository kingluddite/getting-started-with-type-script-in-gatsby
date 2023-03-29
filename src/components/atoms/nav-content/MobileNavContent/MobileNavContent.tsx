import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VisuallyHidden } from '@reach/visually-hidden';
import LinkMapper from '../../../../utils/LinkMapper';
import AsifaLogo from '../../../../assets/images/asifa.png';
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

function MobileNavContent({
  navLinkData,
  socialMediaData,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <>
      <StyledMenuButtonContainer className="mobileNav">
        <StyledToggleButton
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <VisuallyHidden>
            {menuOpen ? `Open nav menu` : `Close nav menu`}
          </VisuallyHidden>
          <div className={menuOpen ? `open` : `close`} />
        </StyledToggleButton>
      </StyledMenuButtonContainer>
      <StyledMenuSidebar $open={menuOpen}>
        <StyledMenuContainer>
          <StyledLinkHeading>About</StyledLinkHeading>
          <StyledLinkContainer>
            {LinkMapper(navLinkData.about)}
          </StyledLinkContainer>

          <StyledLinkHeading>Engage</StyledLinkHeading>
          <StyledLinkContainer>
            {LinkMapper(navLinkData.engage)}
          </StyledLinkContainer>

          <StyledLinkHeading>Programs</StyledLinkHeading>
          <StyledLinkContainer>
            {LinkMapper(navLinkData.programs)}
          </StyledLinkContainer>
          <StyledLinkHeading>Connect</StyledLinkHeading>
          <StyledLinkContainer>
            {LinkMapper(navLinkData.forms)}
          </StyledLinkContainer>
          <StyledSocialContainer>
            <div>
              <a
                href="https://www.asifa-hollywood.org/"
                target="_blank"
                rel="norefer noopener noreferrer"
              >
                <StyledAsifaLogo src={AsifaLogo} alt="ASIFA-Hollywood Logo" />
              </a>
            </div>
            {socialMediaData.map((i, index) => (
              <StyledSocialLink
                key={index + i.icon}
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={i.icon} />
              </StyledSocialLink>
            ))}
          </StyledSocialContainer>
        </StyledMenuContainer>
      </StyledMenuSidebar>
    </>
  );
}

export default MobileNavContent;
