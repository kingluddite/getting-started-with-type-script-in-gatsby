import styled, { css } from 'styled-components';

export const inputStyle = css`
  background: none;
  color: var(--c-dark-grey-3);
  padding: var(--size-dual-nudge);
  border: 1px solid var(--c-grey-2);
  border-radius: var(--radius-xs);
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-half);
`;

export const StyledLabel = styled.label`
  color: var(--c-dark-grey-1);
`;

export const StyledInput = styled.input`
  ${inputStyle}
  height: var(--size-2dn);
`;

export const StyledTextarea = styled.textarea`
  ${inputStyle}
`;
export const StyledErrorMessage = styled.p`
  margin: 0;
  font-size: calc(var(--size-1) - 2px);
  color: var(--c-red-1);
  line-height: inherit;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-half);
  * {
    cursor: pointer;
  }
`;
