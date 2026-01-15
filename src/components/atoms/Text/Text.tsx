import { TextStyled } from './Text.styles';
import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ children, as = 'p', ...props }) => {
  return (
    <TextStyled as={as} {...props}>
      {children}
    </TextStyled>
  );
};
