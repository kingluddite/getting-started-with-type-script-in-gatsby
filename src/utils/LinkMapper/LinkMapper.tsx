// npm
import React from 'react';
import { Link } from 'gatsby';

// styles

import { NavLink } from '@utils/data/navLinks/navLinksDataTypes';
import { StyledLinks } from './styles';

function linkMapper(data: NavLink[]) {
  return data.map((item, index) => {
    if (item.type === `gatsby`) {
      // Render a Link component for internal links
      return (
        <StyledLinks key={index + item.text}>
          <Link
            to={item.url}
            activeStyle={{ color: `var(--c-yellow-2)`, fontWeight: 600 }}
          >
            {item.text}
          </Link>
        </StyledLinks>
      );
    }
    // Render an anchor tag for external links
    return (
      <StyledLinks key={index + item.text}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.text}
        </a>
      </StyledLinks>
    );
  });
}

export default linkMapper;
