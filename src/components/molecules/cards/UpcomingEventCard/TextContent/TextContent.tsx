// components
import Button from '@components/atoms/buttons/Button';

// styles
import { StyledTextContainer, StyledTextHeading } from './styles';

// utils
import truncateText from '@utils/truncateText/truncateText';
import { TextContentProps } from './types';

function TextContent({
  type,
  heading,
  excerpt,
  charLimitHeading,
  charLimitExcerpt,
}: TextContentProps) {
  return (
    <StyledTextContainer $type={type}>
      <StyledTextHeading $type={type} title={heading}>
        {truncateText(charLimitHeading, heading)}
      </StyledTextHeading>
      <p title={excerpt}>{truncateText(charLimitExcerpt, excerpt)}</p>
      <Button actionType="link" theme="minor" disable>
        Learn more
      </Button>
    </StyledTextContainer>
  );
}

export default TextContent;
