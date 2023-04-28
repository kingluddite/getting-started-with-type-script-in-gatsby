import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledSectionTitle = styled.h2`
  color: var(--c-dark-grey-3);
  text-transform: capitalize;
`;

export const StyledProvideCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--size-1);
  justify-items: center;
  width: 100%;
`;

export const StyledLatestNewsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--size-3dn);
  width: 100%;
`;

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-1);
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  gap: var(--size-dual-nudge);
`;
