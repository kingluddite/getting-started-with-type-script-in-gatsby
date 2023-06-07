import styled, { css, keyframes } from 'styled-components';
import { MenuList, MenuButton } from '@reach/menu-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface StyledMenuButtonProps {
  $menuIsActive?: boolean;
}

export const activeStyle = css`
  background: var(--c-yellow-1);
`;

export const StyledMenuButton = styled(MenuButton)<StyledMenuButtonProps>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$menuIsActive ? `var(--c-yellow-1)` : `transparent`};
  color: var(--c-dark-grey-3);
  border: none;
  padding: var(--size-nudge) var(--size-half);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.3s var(--animation-bezier);

  span {
    display: inherit;
  }

  :hover,
  :focus,
  &[data-reach-menu-button][aria-expanded='true'] {
    ${activeStyle}
  }

  &[data-reach-menu-button][aria-expanded='true'] .fa-chevron-down {
    transform: rotate(180deg);
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: var(--size-dual-nudge);
  margin-left: var(--size-nudge);
  transform: rotate(0deg);
  transition: transform 0.3s var(--animation-bezier);
`;

export const StyledMenuListAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledMenuList = styled(MenuList)`
  padding: var(--size-1);
  margin-top: var(--size-1h);
  border: none;
  border-top: 2px solid var(--c-yellow-1);
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  box-shadow: 0 16px 24px rgb(0 0 0 / 10%);

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list] {
      animation: none;
    }
  }

  &[data-reach-menu-list] {
    animation: ${StyledMenuListAnimation} 0.6s var(--animation-bezier);
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &[data-reach-menu-list],
    &[data-reach-menu-items] {
      display: flex;
      flex-direction: column;
      grid-gap: var(--size-1);
      transition: none;
    }
  }

  &[data-reach-menu-list],
  &[data-reach-menu-items] {
    display: flex;
    flex-direction: column;
    grid-gap: var(--size-1);
    transition: width 0.3s ease;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    [data-reach-menu-item] {
      padding: 0;
      background: transparent;
      color: var(--c-grey-4);
      transition: none;

      :hover,
      :focus,
      &[data-selected] {
        color: var(--c-yellow-2);
        transform: scale(1.03);
        font-weight: 600;
      }
    }
  }

  [data-reach-menu-item] {
    padding: 0;
    background: transparent;
    color: var(--c-grey-4);
    transition: 0.3s var(--animation-bezier);

    :hover,
    :focus,
    &[data-selected] {
      color: var(--c-yellow-2);
      transform: scale(1.03);
      font-weight: 600;
    }
  }
`;
