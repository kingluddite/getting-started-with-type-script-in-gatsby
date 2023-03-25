import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSitemapSection } from './StyledSitemapSection';

function SitemapSectionMapper(title, links, social?) {
  return (
    <StyledSitemapSection>
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
              <FontAwesomeIcon icon={e.icon} />
            </a>
          ))}
        </ul>
      ) : undefined}
    </StyledSitemapSection>
  );
}

export default SitemapSectionMapper;
