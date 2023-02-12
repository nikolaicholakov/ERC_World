import * as S from "./elements";
import { forwardRef, ForwardedRef, RefObject } from "react";
import type { HTMLButtonProps, IFontAwesomeIcon } from "types";

export interface IconButtonProps extends IFontAwesomeIcon {
  ref?: RefObject<HTMLButtonElement>;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, content, font, ...props }) => {
  return (
    <S.Button {...props}>
      <S.Icon content={content} font={font} />
    </S.Button>
  );
};
