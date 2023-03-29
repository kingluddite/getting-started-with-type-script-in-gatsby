import React from 'react';
import { Link } from 'gatsby';
// styles
import { StyledLinks } from './styles';

function LinkMapper(data) {
  data.map((item, index) => {
    if (item.type === `gatsby`) {
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
    return (
      <StyledLinks key={index + item.text}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.text}
        </a>
      </StyledLinks>
    );
  });
}

export default LinkMapper;
