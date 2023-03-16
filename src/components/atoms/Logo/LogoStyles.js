import styled from 'styled-components';
export const StyledLogoMedium = styled.img `
  width: var(--size-4dn);
  width: clamp(var(--size-3h), 2.5625rem + 4.1667vw, var(--size-4dn));
  margin-bottom: calc(-1 * var(--size-1));
`;
export const StyledLogoTextOnly = styled.img `
  width: 100%;
  padding: 0 var(--size-1);
`;
export const StyledLogoLarge = styled.img `
  width: var(--size-7dn);
  width: clamp(var(--size-4h), 0.1667rem + 19.2593vw, var(--size-7dn));
`;
