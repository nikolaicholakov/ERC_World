import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { useState } from "react";
import { useWalletConnected } from "hooks";
import Link from "next/link";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  const [popupOpened, setPopupOpened] = useState<boolean>(false);

  const togglePopup = (state: boolean) => () => {
    setPopupOpened(state);
  };

  const { walletConnected } = useWalletConnected();

  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.LeftSide>
          <S.Logo />
          <S.NavigationContainer>
            <S.Navigation>
              <S.NavItem>
                <S.Link href='#'>Explore</S.Link>
              </S.NavItem>
              <S.NavItem>
                <S.Link href='#'>Launchpad</S.Link>
              </S.NavItem>
              <S.NavItem>
                <S.Link href='#'>Staking</S.Link>
              </S.NavItem>
            </S.Navigation>
          </S.NavigationContainer>
        </S.LeftSide>
        {walletConnected ? (
          <S.Connected>
            <S.CartButton />
            <S.LineSeparator />
            <S.CreateNftButton>Create NFT</S.CreateNftButton>
            <S.WalletButton content='\f555' font='--fa-font-solid' />
            <Link href={"/profile/user_name"}>
              <S.ProfileButton content='\f007' font='--fa-font-regular' />
            </Link>
          </S.Connected>
        ) : (
          <S.NotConnected>
            <S.ConnectWalletButton onClick={togglePopup(true)}>
              Connect Wallet
            </S.ConnectWalletButton>
            {popupOpened && (
              <S.ConnectWalletPopup togglePopup={togglePopup} popupOpened={popupOpened} />
            )}
          </S.NotConnected>
        )}
      </S.HeaderContainer>
    </S.Header>
  );
};
