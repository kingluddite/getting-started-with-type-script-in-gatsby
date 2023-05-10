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

type TopNavDropdownProps = {
  buttonText: string;
  dropdownLinkData?: any;
  location: Location;
  page?: any;
};

function TopNavDropdown({
  buttonText,
  dropdownLinkData,
  location,
}: TopNavDropdownProps) {
  const onCurrentPage = dropdownLinkData.some(
    (page: any) => page.url === location.pathname,
  );

  return (
    <Menu>
      <StyledMenuButton $menuIsActive={onCurrentPage}>
        {buttonText}
        <span aria-hidden>
          <StyledFontAwesomeIcon icon={faChevronDown} />
        </span>
      </StyledMenuButton>

      <StyledMenuList>
        {dropdownLinkData.map((item: any, index: number) => {
          if (item.type === `gatsby`) {
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
}

export default TopNavDropdown;
