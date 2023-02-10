import styled from "styled-components";
import type { HeaderProps } from "./Header";
import { Button, Logo as _Logo, IconButton, CartButton as _CartButton } from "components";
import { ConnectWallet } from "collections/Popups";

export const Header = styled("header")<HeaderProps>`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled("div")`
  display: flex;
  padding: 16px 40px;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
`;

export const LeftSide = styled("div")`
  display: flex;
  align-items: center;
`;

export const NotConnected = styled("div")`
  display: flex;
  align-items: center;
`;

export const Logo = styled(_Logo)``;

export const NavigationContainer = styled("nav")`
  margin-left: 20px;
`;

export const Navigation = styled("ul")``;

export const NavItem = styled("li")`
  display: inline-block;
  padding: 12px 16px;
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0px;
  }
`;

export const Link = styled("a")`
  ${({ theme }) => theme.typography.h6.regular}
`;

export const ConnectWalletButton = styled(Button)`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.buttonColor};
`;

export const ConnectWalletPopup = styled(ConnectWallet)``;

export const Connected = styled("div")`
  display: flex;
  align-items: center;
`;

export const CreateNftButton = styled(Button)`
  padding-block: 12px;
  background-color: ${({ theme }) => theme.colors.sectionHeadersColor};
  color: ${({ theme }) => theme.colors.white};

  margin-right: 16px;
`;

export const WalletButton = styled(IconButton)`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.buttonColor};
  background-color: ${({ theme }) => theme.colors.buttonColor}0f;

  margin-right: 16px;
`;

export const ProfileButton = styled(IconButton)`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonColor};
`;

export const CartButton = styled(_CartButton)`
  margin-right: 16px;
`;

export const LineSeparator = styled("div")`
  height: 44px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-right: 16px;
`;
