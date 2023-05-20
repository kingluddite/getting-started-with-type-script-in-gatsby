import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
`;

export const StyledTimeline = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  gap: var(--size-3);
  &::before {
    position: absolute;
    left: 25px;
    z-index: -1;
    content: '';
    height: 100%;
    width: 1px;
    background: var(--c-grey-1);
  }
`;

// const StyledKeyframeMomentsLink = styled(Link)`
//   text-decoration: none;
//   display: flex;
//   background: var(--c-white);
//   border-radius: var(--radius-md);
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2), 0px 16px 24px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   &::before {
//     content: '';
//     width: var(--size-1);
//     background: var(--c-yellow-1);
//   }
//   .content {
//     display: flex;
//     flex-flow: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: var(--size-dual-nudge);
//     width: 100%;
//     max-width: 525px;
//     padding: var(--size-1);
//     p,
//     h3,
//     a {
//       margin: 0;
//     }
//   }
// `;
