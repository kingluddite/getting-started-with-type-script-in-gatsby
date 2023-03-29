import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const activeStyle = css`
  background: var(--c-yellow-1);
`;

export const activeSocialStyle = css`
  color: var(--c-yellow-1);
  transform: scale(1.2);
`;

export const StyledContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: fit-content;
  margin-left: var(--size-1);
`;

export const StyledSocialContainer = styled.div`
  position: absolute;
  display: flex;
  padding-right: var(--size-1);
  align-items: center;
  grid-gap: var(--size-1h);
  opacity: ${(props) => (props.$animate ? 0 : 1)};
  visibility: ${(props) => (props.$animate ? `hidden` : `visibile`)};
  right: ${(props) => (props.$animate ? `var(--size-1)` : `var(--size-1dn)`)};
  transition: all 0.3s var(--animation-bezier);
`;

export const StyledSocialLink = styled.a`
  :hover svg {
    ${activeSocialStyle}
  }

  > svg {
    transition: all 0.3s var(--animation-bezier);
    color: var(--c-grey-4);
  }
`;

export const StyledLinkContainer = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: var(--size-nudge);
  padding-inline-start: 0;
  padding-right: var(--size-half);
  transition: all 0.3s var(--animation-bezier);
  opacity: ${(props) => (props.$animate ? 0 : 1)};
  visibility: ${(props) => (props.$animate ? `hidden` : `visibile`)};
  transform: ${(props) =>
    props.$animate ? `translateX(var(--size-1))` : `translateX(0)`};
`;

export const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: transparent;
  color: var(--c-dark-grey-3);
  border: none;
  padding: var(--size-nudge) var(--size-half);
  border-radius: var(--size-half);
  cursor: pointer;
  transition: background 0.3s var(--animation-bezier);

  :hover,
  :focus {
    ${activeStyle}
  }
`;

export const StyledToggleContainer = styled.div`
  display: flex;
  grid-gap: var(--size-half);
  padding-left: var(--size-dual-nudge);
  border-left: solid 1px var(--c-grey-1);
`;

export const StyledToggleButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  width: var(--size-1);
  padding: 0;

  :hover svg {
    ${activeSocialStyle}
  }

  > svg {
    transition: all 0.3s var(--animation-bezier);
    color: var(--c-grey-4);
  }
`;

export const StyledAsifaLogo = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: -1em 0;
`;
