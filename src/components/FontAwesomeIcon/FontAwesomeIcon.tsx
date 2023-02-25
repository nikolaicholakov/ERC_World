import { RefObject } from "react";
import { IFontAwesomeIcon } from "types";
import * as S from "./elements";

export interface FontAwesomeIconProps extends IFontAwesomeIcon {
  ref?: RefObject<HTMLAnchorElement>;
}

export const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ content, font, ...props }) => (
  <S.Icon content={content} font={font} {...props} />
);
