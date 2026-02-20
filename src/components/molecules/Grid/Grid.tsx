import { GridStyled } from './Grid.styles';
import { GridProps } from './Grid.types';

export const Grid: React.FC<GridProps> = ({ children, as = 'div', ...props }) => {
  return (
    <GridStyled as={as} {...props}>
      {children}
    </GridStyled>
  );
};
