import React, { RefObject } from "react";
import { HTMLAnchorProps, HTMLDivProps } from "types";
import * as S from "./elements";

interface CreateNftHeroProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const CreateNftHero: React.FC<CreateNftHeroProps> = ({ ...props }) => (
  <S.SectionContainer {...props}>
    <S.EditProfileContainer>
      <S.Form />
    </S.EditProfileContainer>
  </S.SectionContainer>
);
