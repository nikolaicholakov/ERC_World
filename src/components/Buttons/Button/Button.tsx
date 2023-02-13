import * as S from "./elements";
import { forwardRef, ForwardedRef, RefObject } from "react";
import type { HTMLButtonProps } from "types";

export interface ButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
  ref?: RefObject<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <S.Button {...props} />;
};
