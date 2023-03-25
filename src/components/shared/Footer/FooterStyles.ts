import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: var(--size-1dn);

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
    }
  }

  .logo {
    img {
      max-height: var(--size-4);
    }
  }

  .copyright {
    flex: 0 0 225px;
    line-height: unset;
    color: var(--c-grey-2);

    p {
      letter-spacing: unset;
      margin: var(--size-nudge) 0;
      line-height: 1;
      font-size: var(--size-dual-nudge);
      text-transform: uppercase;
    }
  }

  .sitemap {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--size-1dn);

    & > * {
      flex: 1 1 0;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto, 3);
    justify-items: center;

    .logo {
      grid-row: 1 / span 1;
      img {
        max-height: var(--size-4);
      }
    }
    .copyright {
      grid-row: 3 / span 1;
      margin-bottom: var(--size-1);
      p {
        text-align: center;
        margin: 2px;
        font-size: var(--size-half);
      }
    }
    .sitemap {
      grid-row: 2 / span 1;
      flex-flow: column;
      align-items: center;
    }
  }
`;
