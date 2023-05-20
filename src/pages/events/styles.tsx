import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
`;
export const StyledSectionTitle = styled.h2`
  color: var(--c-dark-grey-3);
  text-transform: capitalize;
`;

export const StyledTimeline = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  gap: var(--size-3);
  width: 100%;
  max-width: 850px;
  &::before {
    position: absolute;
    left: 25px;
    z-index: -1;
    content: '';
    height: 100%;
    width: 1px;
    background: var(--c-grey-1);
  }

  .timeline-date {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--c-yellow-1);
    width: 50px;
    height: 50px;
    border: 1px solid var(--c-grey-1);
    border-radius: var(--radius-full);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2),
      0px 16px 24px rgba(0, 0, 0, 0.1);
    background: var(--c-white);
    font-weight: bold;
    font-size: var(--size-1);
    line-height: var(--size-1);
    transition: transform 0.3s var(--animation-bezier);
    .timeline-month {
      font-weight: 400;
      font-size: var(--size-dual-nudge);
      line-height: var(--size-dual-nudge);
    }
  }
`;

export const StyledEvent = styled.article`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--size-3);
  width: 100%;
`;

export const StyledDivider = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-dual-nudge);
  p {
    width: 50px;
    text-align: center;
    flex: 0 0 auto;
    color: var(--c-grey-2);
  }
  span {
    flex: 1 1 0;
    background-color: var(--c-grey-2);
    width: 100%;
    position: relative;
    height: 1px;
    &::after {
      --arrow-size: 5px;
      content: '';
      position: absolute;
      right: 0;
      top: calc(-1 * var(--arrow-size));
      width: 0;
      height: 0;
      border-top: var(--arrow-size) solid transparent;
      border-bottom: var(--arrow-size) solid transparent;

      border-right: var(--arrow-size) solid var(--c-grey-2);
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: var(--size-nudge);
  position: relative;
  width: 300px;

  input {
    padding-left: var(--size-2n);
    width: 100%;
  }
`;
export const StyledSearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: var(--size-dual-nudge);
  color: var(--c-grey-3);
  font-size: var(--size-1);
`;
