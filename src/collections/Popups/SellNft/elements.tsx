import styled from "styled-components";
import _Image from "next/image";

import { Button as _Button, Popup as _Popup, Typography } from "components";
import { SellNftForm as _SellNftForm } from "collections/Forms";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)``;

export const Container = styled("div")`
  z-index: 100;
  width: 468px;
  padding: 32px 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: auto;
    max-width: 90%;
    padding: 32px 20px;
  }
`;

export const Title = styled(Typography.H4)`
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
`;

export const SellNftForm = styled(_SellNftForm)``;
