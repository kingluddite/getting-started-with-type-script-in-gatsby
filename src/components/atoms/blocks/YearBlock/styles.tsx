import styled, { css } from 'styled-components';

export const YearBlockStyles = css`
  .timeline-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--size-1);

    .timeline-year {
      display: flex;
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
      transition: transform 0.3s var(--animation-bezier);
    }

    .timeline-content {
      flex-grow: 1;
      /* font-size: 18px; */
      font-weight: bold;
      color: var(--c-grey-4);
      transition: transform 0.3s var(--animation-bezier);
    }

    &:hover {
      .timeline-year {
        transform: scale(1.05);
      }
      .timeline-content {
        transform: translateX(var(--size-half));
      }
    }
  }
`;

export const StyledYearBlock = styled.div`
  ${YearBlockStyles}
`;
