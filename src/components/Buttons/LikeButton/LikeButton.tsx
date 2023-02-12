import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface ILikeButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const LikeButton: React.FC<ILikeButtonProps> = ({ children, ...props }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = event => {
    event.preventDefault();
    setLiked(state => !state);
  };

  return (
    <S.Button onClick={toggleLike} {...props}>
      <S.Text liked={liked}>{children}</S.Text>
      <S.Icon liked={liked} content='\f004' font='--fa-font-regular' />
    </S.Button>
  );
};
