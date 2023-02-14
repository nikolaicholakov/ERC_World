import React, { RefObject } from "react";
import { HTMLAnchorProps, HTMLDivProps } from "types";
import * as S from "./elements";

interface IEditProfileProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const EditProfile: React.FC<IEditProfileProps> = ({ ...props }) => (
  <S.SectionContainer {...props}>
    <S.EditProfileContainer>
      <S.Form />
    </S.EditProfileContainer>
  </S.SectionContainer>
);
