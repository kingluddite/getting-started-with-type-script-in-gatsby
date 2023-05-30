// npm
import React, { useState } from 'react';
import { faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import TopNavDropdown from '../TopNavDropdown';

// images
import AsifaLogo from '@images/asifa.png';

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

// types
import { DesktopNavContentProps } from './types';

function DesktopNavContent({
  location,
  navLinkData,
  socialMediaData,
}: DesktopNavContentProps) {
  // State to toggle the social media links container
  const [socialMediaToggle, setSocialMediaToggle] = useState(false);

  return (
    <StyledContentContainer className="desktopNav">
      {/* Container for the navigation links */}
      <StyledLinkContainer $animate={socialMediaToggle}>
        {/* About dropdown */}
        <li>
          <TopNavDropdown
            buttonText="About"
            dropdownLinkData={navLinkData.about}
            location={location}
          />
        </li>
        {/* Engage dropdown */}
        <li>
          <TopNavDropdown
            buttonText="Engage"
            dropdownLinkData={navLinkData.engage}
            location={location}
          />
        </li>
        {/* Programs dropdown */}
        <li>
          <TopNavDropdown
            buttonText="Programs"
            dropdownLinkData={navLinkData.programs}
            location={location}
          />
        </li>
        {/* Join Us link */}
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
        {/* Contact link */}
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
        {/* ASIFA-Hollywood logo */}
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

      {/* Container for social media links */}
      <StyledSocialContainer $animate={!socialMediaToggle}>
        {/* Render social media links */}
        {socialMediaData.map((i, index) => (
          <StyledSocialLink
            key={index + i.icon}
            href={i.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`social-link-${index}`}
          >
            <FontAwesomeIcon icon={i.icon} />
          </StyledSocialLink>
        ))}
      </StyledSocialContainer>

      {/* Container for the toggle button */}
      <StyledToggleContainer>
        {/* Toggle button for social media links */}
        <StyledToggleButton
          type="button"
          data-testid="toggle-button"
          onClick={() => setSocialMediaToggle(!socialMediaToggle)}
        >
          {/* Render appropriate icon based on toggle state */}
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
