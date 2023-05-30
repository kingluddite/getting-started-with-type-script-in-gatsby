import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// styles
import { StyledSitemapMapper } from './styles';

interface NavLink {
  type?: string;
  url: string;
  text: string;
}

const sitemapMapper = (
  title: string,
  links: NavLink[],
  social?: {
    url: string;
    icon: string;
  }[],
): React.ReactNode => {
  return (
    <StyledSitemapMapper>
      <h3>{title}</h3>
      <ul>
        {links.map(({ type, url, text }) =>
          type === `gatsby` ? (
            <li key={url}>
              <Link to={url}>{text}</Link>
            </li>
          ) : (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer">
                {text}
              </a>
            </li>
          ),
        )}
      </ul>
      {social && social.length > 0 && (
        <ul className="social-links">
          {social.map((e) => (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={e.icon as IconProp}
                data-testid={`fa${e.icon}-icon`}
              />
            </a>
          ))}
        </ul>
      )}
    </StyledSitemapMapper>
  );
};

export default sitemapMapper;
