import styled from "styled-components";
import _Image from "next/image";
import {
  Button as _Button,
  CopyBlockchainAdress,
  LoadMoreButton as _LoadMoreButton,
  Popup as _Popup,
  Typography
} from "components";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)`
  background-color: transparent;
`;

export const Container = styled("div")`
  z-index: 100;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 0px;
  bottom: -10px;
  transform: translateY(100%) translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const List = styled("ul")`
  padding: 0;
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 5px;
`;

export const WalletAdress = styled(CopyBlockchainAdress)``;

export const DisconnectButton = styled(_LoadMoreButton)``;
