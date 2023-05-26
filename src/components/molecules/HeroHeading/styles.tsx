import styled from 'styled-components';

export const StyledHeroHeading = styled.section`
  position: relative;
  width: 100%;

  /* background: url('/images/tile.png'); */
  background: rgb(233 233 233);
  margin-top: -75px;
  padding-top: 75px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  .grad {
    width: 100%;
    height: var(--size-7dn);
    z-index: 1;
  }

  .grad-top {
    display: none;
    margin-top: -75px;
    background: linear-gradient(
      0deg,
      rgb(251 251 249 / 0%) 0%,
      rgb(251 251 249) 100%
    );
  }

  .grad-bottom {
    background: linear-gradient(
      180deg,
      rgb(251 251 249 / 0%) 0%,
      rgb(251 251 249) 100%
    );
    height: clamp(var(--size-3n), -2.75rem + 26.6667vw, var(--size-7dn));
  }

  .grad-left {
    width: var(--size-1dn);
    height: 100%;
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      270deg,
      rgb(251 251 249 / 0%) 0%,
      rgb(251 251 249) 100%
    );
  }

  .grad-right {
    width: var(--size-1dn);
    height: 100%;
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgb(251 251 249 / 0%) 0%,
      rgb(251 251 249) 100%
    );
  }

  .wing {
    position: absolute;
    bottom: 0;
    height: 110%;
  }

  .wing-left {
    left: -5%;
    transform: scaleX(-1);
    @media screen and (width <= 1000px) {
      left: -15%;
      height: 110%;
      max-width: 70%;
    }
  }

  .wing-right {
    right: -5%;
    @media screen and (width <= 1000px) {
      right: -15%;
      height: 110%;
      max-width: 70%;
    }
  }
`;
export const StyledHeroHeadingContentHome = styled.div`
  width: 785px;
  max-width: 100%;
  padding-top: var(--size-1h);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: var(--size-1h);
  gap: clamp(var(--size-dual-nudge), -0.25rem + 4.4444vw, var(--size-1h));
  z-index: 5;

  h1,
  h2,
  h3,
  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  p {
    color: var(--c-grey-4);
    font-size: var(--size-2n);
    font-size: clamp(var(--size-1), -1rem + 8.8889vw, var(--size-2n));
    font-weight: 600;
    line-height: var(--size-2dn);
    line-height: clamp(var(--size-1n), -0.75rem + 8.8889vw, var(--size-2dn));
    font-family: var(--font-montserrat);
  }
`;
export const StyledHeroHeadingContent = styled.div`
  width: 785px;
  max-width: 100%;
  padding-top: var(--size-1h);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: var(--size-1h);
  gap: clamp(var(--size-dual-nudge), -0.25rem + 4.4444vw, var(--size-1h));
  z-index: 5;

  h1,
  h2,
  h3,
  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  p {
    color: var(--c-grey-4);
    font-size: var(--size-1h);
    font-size: clamp(var(--size-1), 0.625rem + 1.6667vw, var(--size-1h));
    font-weight: 600;
    line-height: var(--size-2dn);
    line-height: clamp(var(--size-1n), 0.4375rem + 2.5vw, var(--size-1dn));
    font-family: var(--font-montserrat);
  }
`;
