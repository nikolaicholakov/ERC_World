import { RefObject } from "react";
import { HTMLSectionProps } from "types";
import * as S from "./elements";

export interface SectionProps extends HTMLSectionProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Section: React.FC<SectionProps> = ({ children, ...props }) => (
  <S.SectionWrapper {...props}>{children}</S.SectionWrapper>
);
