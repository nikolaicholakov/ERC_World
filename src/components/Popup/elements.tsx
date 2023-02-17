import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const PopupContainer = styled("div")<{ popupOpened: boolean }>`
  display: ${({ popupOpened }) => (popupOpened ? "flex" : "none")};
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.popupBackground};
  opacity: 0.6;
`;
