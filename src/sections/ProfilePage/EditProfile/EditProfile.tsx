import React, { RefObject } from "react";
import { HTMLAnchorProps, HTMLDivProps } from "types";
import * as S from "./elements";

interface EditProfileProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const EditProfile: React.FC<EditProfileProps> = ({ ...props }) => (
  <S.SectionContainer {...props}>
    <S.EditProfileContainer>
      <S.EditProfileForm />
    </S.EditProfileContainer>
  </S.SectionContainer>
);
