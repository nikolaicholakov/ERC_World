import styled from "styled-components";
import _Image from "next/image";

import { Button as _Button, Popup as _Popup, Typography } from "components";
import { MakeAnOfferForm } from "collections/Forms";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)``;

export const Container = styled("div")`
  z-index: 100;
  max-width: 468px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 24px 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: auto;
    width: 90%;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 24px 20px;
  }
`;

export const Form = styled(MakeAnOfferForm)``;
