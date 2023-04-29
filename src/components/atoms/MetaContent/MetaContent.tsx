import React, { FC } from 'react';
import Tag from '../tags/Tag';

import { dateFormatter } from '../../../utils/dateFormatter';
import { StyledMetaContainer } from './styles';

type MetaContentProps = {
  tag: string;
  date: Date;
};

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
