import styled from 'styled-components';

export const StyledAEFLogo = styled.img`
  max-height: var(--size-2);
  position: relative;
  z-index: 10;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--c-grey-1);
  padding: var(--size-half) 0;

  @media screen and (max-width: 768px) {
    padding: var(--size-dual-nudge) 0;
    height: 56px;
  }

  li {
    list-style: none;
  }

  .desktopNav {
    display: flex;
  }
  .mobileNav {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .desktopNav {
      display: none;
    }
    .mobileNav {
      display: flex;
    }
  }
`;
