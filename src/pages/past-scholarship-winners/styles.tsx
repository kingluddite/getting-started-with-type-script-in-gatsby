import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledTwoColumnSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--size-2h);
  width: 100%;
  & > * {
    max-width: calc(50% - var(--size-1n));
  }
  @media only screen and (max-width: 768px) {
    & > * {
      max-width: 100%;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
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
