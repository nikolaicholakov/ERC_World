import styled from "styled-components";
import _Image from "next/image";
import {
  Button as _Button,
  HamburgerMenuButton,
  Popup as _Popup,
  Logo as _Logo,
  Typography
} from "components";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)``;

export const HamburgerMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 101;

  padding: 20px;
`;

export const HamMenuButton = styled(HamburgerMenuButton)``;

export const Logo = styled(_Logo)`
  align-self: center;
  margin-bottom: 10px;
`;

export const NavigationContainer = styled("nav")``;

export const Navigation = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const NavItem = styled("li")`
  display: inline-block;
  padding: 12px 16px;
`;

export const Link = styled("a")`
  ${({ theme }) => theme.typography.h5.regular}
  font-weight:600
`;
