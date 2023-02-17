import * as S from "./elements";
import type { HTMLButtonProps } from "types";

export interface LoadMoreButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ ...props }) => {
  return <S.Button {...props}></S.Button>;
};
