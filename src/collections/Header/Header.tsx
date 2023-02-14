import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { useEffect, useState } from "react";
import { useWalletConnected } from "hooks";
import Link from "next/link";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  const [walletPopupOpened, setWalletPopupOpened] = useState<boolean>(false);
  const [cartPopupOpened, setCartPopupOpened] = useState<boolean>(false);

  const toggleWalletPopup = (state: boolean) => () => {
    setWalletPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleCartPopup = (state: boolean) => () => {
    setCartPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
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
            <S.CartButton onClick={toggleCartPopup(true)} />
            {cartPopupOpened && (
              <S.CartPopup togglePopup={toggleCartPopup} popupOpened={cartPopupOpened} />
            )}
            <S.LineSeparator />
            <S.CreateNftButton>Create NFT</S.CreateNftButton>
            <S.WalletButton content='\f555' font='--fa-font-solid' />
            <Link href={"/profile/user_name"}>
              <S.ProfileButton content='\f007' font='--fa-font-regular' />
            </Link>
          </S.Connected>
        ) : (
          <S.NotConnected>
            <S.ConnectWalletButton onClick={toggleWalletPopup(true)}>
              Connect Wallet
            </S.ConnectWalletButton>
            {walletPopupOpened && (
              <S.ConnectWalletPopup
                togglePopup={toggleWalletPopup}
                popupOpened={walletPopupOpened}
              />
            )}
          </S.NotConnected>
        )}
      </S.HeaderContainer>
    </S.Header>
  );
};
