import styled from 'styled-components';

// export const StyledCallout = styled.a`
//   margin: 0 auto;
//   display: flex;
//   color: var(--c-dark-grey-3);
//   background: var(--c-yellow-1);
//   border-radius: var(--radius-md);
//   width: 100%;
//   max-width: 525px;
//   overflow: hidden;
//   text-decoration: none;
//   transition: all 0.5s var(--animation-bezier);

//   &::before {
//     content: '';
//     position: relative;
//     padding: var(--size-half);
//     width: var(--size-2);
//     top: 0;
//     bottom: 0;
//     background: var(--c-yellow-2);
//   }

//   .content {
//     padding: var(--size-1);
//     display: flex;
//     flex-flow: column;
//     align-items: center;
//     justify-content: center;
//     p {
//       font-size: var(--size-1n);
//     }
//     h3 {
//       color: var(--c-dark-grey-4);
//     }
//   }

//   .arrow {
//     padding: var(--size-1);
//     font-size: var(--size-2);
//     color: var(--c-yellow-2);
//     display: flex;
//     flex-flow: column;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.5s var(--animation-bezier);
//   }

//   &:hover,
//   &:focus {
//     cursor: pointer;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2), 0 16px 24px rgba(0, 0, 0, 0.1);
//     .arrow {
//       color: var(--c-yellow-3);
//     }
//   }
// `;

export const StyledFAQ = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  color: var(--c-dark-grey-3);
  h3 {
    color: var(--c-dark-grey-4);
  }
  p {
    padding-left: var(--size-1);
  }
`;
