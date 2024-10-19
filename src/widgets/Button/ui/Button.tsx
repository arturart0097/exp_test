import { FC, ReactNode } from "react";
import { ButtonStyle } from "./ButtonStyles";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <ButtonStyle onClick={onClick ? () => onClick() : undefined} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
