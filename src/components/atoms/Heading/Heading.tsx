import { HeadingStyled } from './Heading.styles';
import { HeadingProps } from './Heading.types';

export const Heading: React.FC<HeadingProps> = ({ children, size = 'md', ...props }) => {
  return (
    <HeadingStyled size={size} {...props}>
      {children}
    </HeadingStyled>
  );
};
