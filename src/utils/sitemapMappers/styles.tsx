import styled from 'styled-components';

export const StyledSitemapMapper = styled.li`
  display: flex;
  flex-flow: column;
  gap: var(--size-1);
  min-width: 150px;

  h3 {
    line-height: unset;
    color: var(--c-dark-grey-4);
    font-size: var(--size-1);
    font-weight: 600;
  }

  a {
    color: var(--c-grey-4);
    font-weight: 400;
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }
    @media screen and (prefers-reduced-motion: reduce) {
      &:hover,
      &:focus {
        color: var(--c-yellow-1);
        transition: none;
      }
    }

    &:hover,
    &:focus {
      color: var(--c-yellow-1);
      transition: color 0.3s var(--animation-bezier);
    }
  }

  ul {
    display: flex;
    flex-flow: column;
    gap: var(--size-1);

    li {
      padding: 0;
      margin: 0;
    }
  }

  .social-links {
    display: flex;
    flex-flow: row wrap;
    gap: var(--size-1);
    max-width: 100px;
    @media screen and (prefers-reduced-motion: reduce) {
      a {
        transition: none;

        &:hover,
        &:focus {
          transform: scale(1.2);
        }
      }
    }

    a {
      transition: transform 0.3s var(--animation-bezier);

      &:hover,
      &:focus {
        transform: scale(1.2);
      }
    }
  }

  @media only screen and (width <= 768px) {
    align-items: center;

    ul {
      align-items: center;
    }

    .social-links {
      justify-content: center;
      gap: var(--size-2h);
      max-width: 100%;

      a {
        font-size: var(--size-2);
      }
    }
  }
`;
