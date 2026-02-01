import { ColumnStyled } from './Column.styles';
import { ColumnProps } from './Column.types';

export const Column: React.FC<ColumnProps> = ({ children, as = 'div', ...props }) => {
  return (
    <ColumnStyled as={as} {...props}>
      {children}
    </ColumnStyled>
  );
};
