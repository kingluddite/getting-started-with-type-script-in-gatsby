import React, { FC } from 'react';

// components
import Tag from '../tags/Tag';

// utilities
import { dateFormatter } from '../../../utils/dateFormatter';

// styles
import { StyledMetaContainer } from './styles';

// types
import { MetaContentProps } from './types';

const MetaContent: FC<MetaContentProps> = ({ tag, date }) => {
  return (
    <StyledMetaContainer>
      <Tag type="primary" text={tag} color="grey" />
      {` `}
      <time dateTime={date.toISOString()}>{dateFormatter(date)}</time>
    </StyledMetaContainer>
  );
};

export default MetaContent;
