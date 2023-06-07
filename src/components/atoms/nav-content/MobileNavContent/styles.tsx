import styled, { css } from 'styled-components';

import type { FlattenSimpleInterpolation } from 'styled-components';

interface StyledMenuSidebarProps {
  $open: boolean;
}

export const activeSocialStyle: FlattenSimpleInterpolation = css`
  color: var(--c-yellow-1);
  transform: scale(1.2);
`;

export const StyledMenuButtonContainer = styled.div`
  display: flex;
  grid-gap: var(--size-half);
  padding-left: var(--size-dual-nudge);
  border-left: solid 1px var(--c-grey-1);
  margin-left: var(--size-1);
  z-index: 10;
`;

export const StyledToggleButton = styled.button`
  width: var(--size-2);
  height: var(--size-1dn);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: all 0.3s var(--animation-bezier);

  @media screen and (prefers-reduced-motion: reduce) {
    > div,
    > div::before,
    > div::after {
      transition: none;
      width: var(--size-1dn);
      height: 3px;
      border-radius: 5px;
      background: var(--c-yellow-1);
      position: absolute;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    > div,
    > div::before,
    > div::after {
      transition: none;
      width: var(--size-1dn);
      height: 3px;
      border-radius: 5px;
      background: var(--c-yellow-1);
      position: absolute;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    > div,
    > div::before,
    > div::after {
      transition: none;
      width: var(--size-1dn);
      height: 3px;
      border-radius: 5px;
      background: var(--c-yellow-1);
      position: absolute;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    > div,
    > div::before,
    > div::after {
      transition: none;
      width: var(--size-1dn);
      height: 3px;
      border-radius: 5px;
      background: var(--c-yellow-1);
      position: absolute;
    }
  }

  > div,
  > div::before,
  > div::after {
    transition: all 0.3s var(--animation-bezier);
    width: var(--size-1dn);
    height: 3px;
    border-radius: 5px;
    background: var(--c-yellow-1);
    position: absolute;
  }

  > div::before,
  > div::after {
    content: '';
    left: 0;
  }

  > div::before {
    transform: translateY(-8px);
  }

  > div::after {
    transform: translateY(8px);
  }

  .open {
    transform: rotate(45deg);
  }

  .open::before {
    transform: rotate(-270deg);
    left: 0;
  }

  .open::after {
    transform: translateY(16px);
    opacity: 0;
  }
`;

export const StyledMenuSidebar = styled.div<StyledMenuSidebarProps>`
  width: 100%;
  height: 100%;
  transform: ${(props) =>
    props.$open ? `translateX(0))` : `translateX(-100%)`};
  visibility: ${(props) => (props.$open ? `visible` : `hidden`)};
  position: fixed;
  z-index: 1;
  top: 56px;
  left: 0;
  background-color: var(--c-white);
  transition: all 0.4s var(--animation-bezier);
  overflow-x: hidden;
`;

export const StyledMenuContainer = styled.div`
  padding: var(--size-1) var(--size-2) var(--size-2);
  overflow-x: scroll;
  height: calc(100vh - var(--size-3));
`;

export const StyledLinkHeading = styled.h2`
  color: var(--c-dark-grey-4);
  font-size: var(--size-1);
  font-weight: 600;
  line-height: var(--size-2dn);
`;

export const StyledLinkContainer = styled.ul`
  font-weight: 600;
  padding: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-bottom: var(--size-1);
  display: flex;
  flex-direction: column;
  gap: var(--size-half);
`;

export const StyledSocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-top: var(--size-2h);
  gap: var(--size-2) var(--size-1);
`;

export const StyledSocialLink = styled.a`
  @media screen and (prefers-reduced-motion: reduce) {
    > svg {
      transition: none;
      color: var(--c-grey-4);
      font-size: var(--size-2);
    }
  }

  > svg {
    transition: all 0.3s var(--animation-bezier);
    color: var(--c-grey-4);
    font-size: var(--size-2);
  }

  :hover svg,
  :focus svg {
    ${activeSocialStyle}
  }
`;

export const StyledAsifaLogo = styled.img`
  width: 2.5em;
  height: 2.5em;
`;
