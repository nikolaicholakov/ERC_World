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
  height: fit-content;
  max-height: 472px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: auto;
    width: 90%;
    @media (orientation: landscape) {
      max-height: 90%;
      padding-top: 100px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 24px 20px;
  }
`;

export const Form = styled(MakeAnOfferForm)``;
