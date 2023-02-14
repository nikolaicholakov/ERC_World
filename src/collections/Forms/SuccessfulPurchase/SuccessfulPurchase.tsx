import * as S from "./elements";
import { RefObject } from "react";
import type { HTMLDivProps } from "types";

export interface SuccessfulPurchaseProps extends HTMLDivProps {
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const SuccessfulPurchase = ({ togglePopup, ...props }: SuccessfulPurchaseProps) => {
  return (
    <S.SubmitedContainer {...props}>
      <S.SuccessTitle>Purchase successful</S.SuccessTitle>
      <S.Message>You successfully bought/sell NFT you can check your</S.Message>
      <S.TransactionLinkContainer href={"https://polygonscan.com/"}>
        transaction on Polyscan
        <S.NewWindowIcon content='\f08e' font='--fa-font-solid' />
      </S.TransactionLinkContainer>
      <S.ButtonsContainer>
        <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
      </S.ButtonsContainer>
    </S.SubmitedContainer>
  );
};
