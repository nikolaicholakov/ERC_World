import { RefObject } from "react";
import { IFollowerCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IFollowerCardProps extends IFollowerCard {
  ref?: RefObject<HTMLDivElement>;
}

export const FollowerCard: React.FC<IFollowerCardProps> = ({
  image,
  name,
  relationship,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.LeftSide>
        <S.ImageContainer>
          <S.Image src={image} layout='fill' objectFit='cover' />
        </S.ImageContainer>
        <S.Name>User Name</S.Name>
      </S.LeftSide>
      {relationship === "following" ? (
        <S.UnfollowButton>Unfollow</S.UnfollowButton>
      ) : (
        <S.FollowButton>Follow</S.FollowButton>
      )}
    </S.Container>
  );
};
