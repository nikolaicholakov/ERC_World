import { HamburgerMenuButton, Logo as _Logo } from "components";
import styled from "styled-components";

export const HamburgerMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;

  padding: 20px;
`;

export const HamMenuButton = styled(HamburgerMenuButton)``;

export const Logo = styled(_Logo)``;
