import React, { RefObject, useState } from "react";
import { HTMLDivProps, IFollowerCard } from "types";
import * as S from "./elements";

interface FollowersProps extends HTMLDivProps {
  popupOpened: "following" | "followers" | false;
  togglePopup: (state: "following" | "followers" | false) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const exampleFollowers: IFollowerCard[] = [
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "not-following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "not-following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "not-following"
  },
  {
    image: "/imgs/user1.png",
    name: "User name",
    relationship: "following"
  }
];

export const Followers: React.FC<FollowersProps> = ({ popupOpened, togglePopup, ...props }) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened !== false} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Title>{popupOpened === "following" ? "Following" : "Followers"}</S.Title>
        <S.FollowersContainer>
          {exampleFollowers.map((follower, i) => (
            <S.Follower key={"follow" + i} {...follower} />
          ))}
        </S.FollowersContainer>
        <S.ButtonsContainer>
          <S.CloseButton onClick={togglePopup(false)}>Close</S.CloseButton>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
