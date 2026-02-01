import { DisplayStyled } from './Display.styles';
import { DisplayProps } from './Display.types';

export const Display: React.FC<DisplayProps> = ({ children, size = 'md', ...props }) => {
  return (
    <DisplayStyled size={size} {...props}>
      {children}
    </DisplayStyled>
  );
};
