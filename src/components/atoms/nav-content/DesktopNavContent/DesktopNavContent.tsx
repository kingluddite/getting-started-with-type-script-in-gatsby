// npm
import React, { useState } from 'react';
import { faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import TopNavDropdown from '../TopNavDropdown';

// images
import AsifaLogo from '../../../../assets/images/asifa.png';

// styles
import {
  StyledContentContainer,
  StyledLinkContainer,
  StyleLink,
  StyledAsifaLogo,
  StyledSocialContainer,
  StyledSocialLink,
  StyledToggleButton,
  StyledToggleContainer,
} from './styles';

function DesktopNavContent({ location, navLinkData, socialMediaData }) {
  const [socialMediaToggle, setSocialMediaToggle] = useState(false);

  return (
    <StyledContentContainer className="desktopNav">
      <StyledLinkContainer $animate={socialMediaToggle}>
        <li>
          <TopNavDropdown
            buttonText="About"
            dropdownLinkData={navLinkData.about}
            location={location}
          />
        </li>
        <li>
          <TopNavDropdown
            buttonText="Engage"
            dropdownLinkData={navLinkData.engage}
            location={location}
          />
        </li>
        <li>
          <TopNavDropdown
            buttonText="Programs"
            dropdownLinkData={navLinkData.programs}
            location={location}
          />
        </li>
        <li>
          <StyleLink
            to="/join"
            activeStyle={{
              background: `var(--c-yellow-1)`,
            }}
          >
            Join Us
          </StyleLink>
        </li>
        <li>
          <StyleLink
            to="/contact"
            activeStyle={{
              background: `var(--c-yellow-1)`,
            }}
          >
            Contact
          </StyleLink>
        </li>
        <li>
          <a
            href="https://www.asifa-hollywood.org/"
            target="_blank"
            rel="norefer noopener noreferrer"
          >
            <StyledAsifaLogo src={AsifaLogo} alt="ASIFA-Hollywood Logo" />
          </a>
        </li>
      </StyledLinkContainer>
      <StyledSocialContainer $animate={!socialMediaToggle}>
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
      <StyledToggleContainer>
        <StyledToggleButton
          type="button"
          onClick={() => setSocialMediaToggle(!socialMediaToggle)}
        >
          {socialMediaToggle ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faShareAlt} />
          )}
        </StyledToggleButton>
        {/* TODO: Add Dark Mode Toggle */}
      </StyledToggleContainer>
    </StyledContentContainer>
  );
}

export default DesktopNavContent;
