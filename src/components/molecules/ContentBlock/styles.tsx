import styled from 'styled-components';

export const StyledContentBlock = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-2h);
  width: 785px;
  max-width: 100%;
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 480px) {
    gap: var(--size-1dn);
    h2 {
      width: 100%;
      text-align: left;
    }
    .c2a {
      width: 100%;
    }
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  h1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: var(--size-2n);
    line-height: var(--size-2dn);
    font-size: clamp(var(--size-1n), -0.4824rem + 6.5882vw, var(--size-2n));
    line-height: clamp(var(--size-1d), 0.4412rem + 4.7059vw, var(--size-2dn));
    margin: var(--size-1) 0;
  }

  h2 {
    font-weight: bold;
    font-size: var(--size-2n);
    line-height: var(--size-2dn);
    font-size: clamp(var(--size-1n), -0.4824rem + 6.5882vw, var(--size-2n));
    line-height: clamp(var(--size-1d), 0.4412rem + 4.7059vw, var(--size-2dn));
    margin: var(--size-1) 0;
  }

  h3 {
    font-weight: 600;
    font-size: var(--size-1h);
    line-height: var(--size-1dn);
    font-size: clamp(var(--size-1n), 1.0625rem + 0.8333vw, var(--size-1h));
    line-height: clamp(var(--size-1h), 1.3125rem + 0.8333vw, var(--size-1dn));
    margin: var(--size-1) 0;
  }

  p,
  ul,
  ol {
    font-size: clamp(var(--size-1), 0.8125rem + 0.8333vw, var(--size-1n));
    line-height: 150%;
    margin: var(--size-1) 0;
  }

  li {
    padding: var(--size-dual-nudge) 0;
  }

  a {
    color: var(--c-yellow-2);
    &:active,
    &:hover {
      color: var(--c-yellow-1);
    }
  }
`;
