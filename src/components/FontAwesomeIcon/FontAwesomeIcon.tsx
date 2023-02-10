import { RefObject } from "react";
import { IFontAwesomeIcon } from "types";
import * as S from "./elements";

export interface IFontAwesomeIconProps extends IFontAwesomeIcon {
  ref?: RefObject<HTMLAnchorElement>;
}

export const FontAwesomeIcon: React.FC<IFontAwesomeIconProps> = ({ content, font, ...props }) => (
  <S.Icon content={content} font={font} {...props} />
);
