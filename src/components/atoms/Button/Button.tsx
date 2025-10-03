import { ButtonUI } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonUI>{children}</ButtonUI>;
};
