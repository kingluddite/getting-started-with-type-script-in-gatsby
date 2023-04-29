import styled from 'styled-components';

export const StyledTextContainer = styled.div<{ $type?: string }>`
  display: flex;
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.$type === `tomsBlog` ? `var(--size-half)` : `var(--size-nudge)`};
  flex: 1;
  p {
    margin: 0;
    color: var(--c-grey-4);
    line-clamp: 2;
  }
  .read-more-excerpt {
    color: var(--c-yellow-2);
  }
`;

export const StyledTextHeading = styled.h3<{ $type?: string }>`
  color: var(--dark-grey-4);
  font-size: ${(props) =>
    props.$type === `tomsBlog` ? `var(--size-2)` : `var(--size-1n)`};
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
`;
