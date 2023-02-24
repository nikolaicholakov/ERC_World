import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount, usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { formatEther, parseUnits } from "ethers/lib/utils";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  const [walletPopupOpened, setWalletPopupOpened] = useState<boolean>(false);
  const [cartPopupOpened, setCartPopupOpened] = useState<boolean>(false);
  const [dropdownPopupOpened, setDropdownPopupOpened] = useState<boolean>(false);
  const [openHamMenu, setOpenHamMenu] = useState<boolean>(false);

  const { address, connector, isConnected } = useAccount();

  const toggleWalletPopup = (state: boolean) => () => {
    setWalletPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleCartPopup = (state: boolean) => () => {
    setCartPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleHamMenu = (state: boolean) => () => {
    setOpenHamMenu(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleDropdownPopup = (state: boolean) => () => {
    setDropdownPopupOpened(state);
    toggleWalletPopup(false)();
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const { config } = usePrepareSendTransaction({
    request: {
      to: "0x0687D21ba577FD40495Aa5B567D39FBA74E177ba",
      value: parseUnits("0.0001", "ether")
    }
  });

  // console.log(config);

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config);

  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.HamMenuButton onClick={toggleHamMenu(true)} menuOpened={openHamMenu} />
        <S.HamMenu popupOpened={openHamMenu} togglePopup={toggleHamMenu} />
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
        {address ? (
          <S.Connected>
            <button onClick={() => sendTransaction?.()}>Sent Eth</button>
            <S.CartButton onClick={toggleCartPopup(true)} />
            {cartPopupOpened && (
              <S.CartPopup togglePopup={toggleCartPopup} popupOpened={cartPopupOpened} />
            )}
            <S.LineSeparator />
            <Link href={"/create-nft"}>
              <S.CreateNftButton>Create NFT</S.CreateNftButton>
            </Link>
            <S.WalletContainer>
              <S.WalletButton
                onClick={toggleDropdownPopup(true)}
                content='\f555'
                font='--fa-font-solid'
              />
              {dropdownPopupOpened && (
                <S.DropdownPopup
                  popupOpened={dropdownPopupOpened}
                  togglePopup={toggleDropdownPopup}
                />
              )}
            </S.WalletContainer>
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
