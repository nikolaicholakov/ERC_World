import React, { RefObject, useState } from "react";
import { HTMLSectionProps } from "types";
import * as S from "./elements";

interface IProfileHeroProps extends HTMLSectionProps {
  ref?: RefObject<HTMLDivElement>;
}

export const ProfileHero: React.FC<IProfileHeroProps> = ({ ...props }) => {
  const [checkFollowersPopupOpened, setCheckedFollowersPopupOpened] = useState<
    "following" | "followers" | false
  >(false);

  const handleCheckFollowers = (state: "following" | "followers" | false) => () => {
    setCheckedFollowersPopupOpened(state);
    document.body.style.overflow = state !== false ? "hidden" : "auto";
  };

  return (
    <S.Container {...props}>
      <S.ProfileBackgroundImage>
        <S.Image src={"/imgs/userBg.png"} layout='fill' objectFit='cover' />
      </S.ProfileBackgroundImage>
      <S.ProfileInformationContainer>
        <S.ProfileImg>
          <S.Image src={"/imgs/user2.png"} layout='fill' objectFit='cover' />
        </S.ProfileImg>
        <S.ColumnRow>
          <S.UserName>User_Name</S.UserName>
          <S.CopyAdressButton />
        </S.ColumnRow>
        <S.Row>
          <S.Bio>
            I am a chef with 20 years of experience. Thanks to the digitalization of the modern
            world, I can create NFTs from the photos of my dishes.{" "}
          </S.Bio>
        </S.Row>
        <S.Row>
          <S.FollowingBlock onClick={handleCheckFollowers("following")}>
            <S.FollowCount>22</S.FollowCount>
            <S.FollowText>Following</S.FollowText>
          </S.FollowingBlock>
          {checkFollowersPopupOpened === "following" && (
            <S.CheckFollowersPopup
              togglePopup={handleCheckFollowers}
              popupOpened={checkFollowersPopupOpened}
            />
          )}
          <S.FollowingBlock onClick={handleCheckFollowers("followers")}>
            <S.FollowCount>22</S.FollowCount>
            <S.FollowText>Followers</S.FollowText>
          </S.FollowingBlock>
          {checkFollowersPopupOpened === "followers" && (
            <S.CheckFollowersPopup
              togglePopup={handleCheckFollowers}
              popupOpened={checkFollowersPopupOpened}
            />
          )}
        </S.Row>
        <S.Row>
          <S.CreateNftButton>Create Nft</S.CreateNftButton>
          <S.EditProfileButton>Edit Profile</S.EditProfileButton>
          <S.OtherSettingsButton />
        </S.Row>
      </S.ProfileInformationContainer>
    </S.Container>
  );
};
