// npm
import React from 'react';

// styles
import { StyledYearBlock } from './styles';

// types
import { YearBlockProps } from './types';

function YearBlock({ year, text, children }: YearBlockProps) {
  return (
    <StyledYearBlock>
      <div className="timeline-card">
        <div>
          <span className="timeline-year">{year}</span>
        </div>
        <div className="timeline-content">
          <div className="timeline-description">{text || children}</div>
        </div>
      </div>
    </StyledYearBlock>
  );
}

export default YearBlock;
