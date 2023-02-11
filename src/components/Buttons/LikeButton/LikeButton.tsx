import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface ILikeButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const LikeButton: React.FC<ILikeButtonProps> = ({ ...props }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = event => {
    event.preventDefault();
    setLiked(state => !state);
  };

  return (
    <S.Button onClick={toggleLike} {...props}>
      <S.Icon liked={liked} content='\f004' font='--fa-font-regular' />
    </S.Button>
  );
};
