// npm
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { IconName } from '@fortawesome/fontawesome-svg-core';

// styles
import { StyledSitemapMapper } from './styles';

const SitemapMapper = (
  title: string,
  links: {
    type: string;
    url: string;
    text: string;
  }[],
  social?: {
    url: string;
    icon: string;
  }[],
) => {
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
      {social ? (
        <ul className="social-links">
          {social.map((e) => (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon icon={[`fas`, e.icon as IconName]} /> */}
              <FontAwesomeIcon icon={e.icon as IconProp} />
            </a>
          ))}
        </ul>
      ) : undefined}
    </StyledSitemapMapper>
  );
};

export default SitemapMapper;
