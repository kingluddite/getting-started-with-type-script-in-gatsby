// npm
import React from 'react';
import { Link } from 'gatsby';
import { Menu, MenuLink } from '@reach/menu-button';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// styles
import '@reach/menu-button/styles.css';
import {
  StyledMenuButton,
  StyledFontAwesomeIcon,
  StyledMenuList,
} from './styles';

// types
import type { TopNavDropdownProps } from './types';

const TopNavDropdown: React.FC<TopNavDropdownProps> = ({
  buttonText,
  dropdownLinkData,
  location,
}: TopNavDropdownProps) => {
  // Get the Location object for the current page.

  // Check if the current page is one of the pages in the dropdown menu.
  const onCurrentPage =
    dropdownLinkData &&
    dropdownLinkData.some((page: any) => page.url === location?.pathname || ``);

  return (
    <Menu>
      <StyledMenuButton $menuIsActive={onCurrentPage}>
        {buttonText}
        <span aria-hidden>
          <StyledFontAwesomeIcon icon={faChevronDown} />
        </span>
      </StyledMenuButton>

      <StyledMenuList>
        {dropdownLinkData &&
          dropdownLinkData.map((item: any, index: number) => {
            if (item.type === `gatsby`) {
              // If the item is a Gatsby link, return a Link component.
              return (
                <MenuLink
                  key={index + item.text}
                  as={Link}
                  to={item.url}
                  activeStyle={{ color: `var(--c-yellow-2)`, fontWeight: 600 }}
                >
                  {item.text}
                </MenuLink>
              );
            }
            // Otherwise, return an <a> element.
            return (
              <MenuLink
                key={index + item.text}
                as="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </MenuLink>
            );
          })}
      </StyledMenuList>
    </Menu>
  );
};

export default TopNavDropdown;
