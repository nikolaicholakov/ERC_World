import { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

export interface SectionProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Section: React.FC<SectionProps> = ({ children, ...props }) => (
  <S.SectionWrapper {...props}>{children}</S.SectionWrapper>
);
