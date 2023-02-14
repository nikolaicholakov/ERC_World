import * as S from "./elements";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { HTMLFormProps } from "types";
import { makeAnOfferSchema } from "schemas";
import { InferType } from "yup";
import { useYupValidationResolver } from "utils";

export type MakeAnOfferFormValues = InferType<typeof makeAnOfferSchema>;

export interface IMakeAnOfferFormProps extends HTMLFormProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
}

export const MakeAnOfferForm = ({ popupOpened, togglePopup, ...props }: IMakeAnOfferFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [purchaseSubmited, setPurchaseSubmited] = useState<boolean>(false);

  const handleBuyNow = () => {
    setPurchaseSubmited(true);
  };

  const resolver = useYupValidationResolver(makeAnOfferSchema);
  const form = useForm<MakeAnOfferFormValues>({
    resolver
  });

  const { control, handleSubmit } = form;

  const onSubmit: SubmitHandler<MakeAnOfferFormValues> = async ({ offerPrice }) => {
    try {
      console.log(offerPrice);
      togglePopup(false)();
    } catch (error: any) {
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  };

  return (
    <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
      {purchaseSubmited ? (
        <S.PurchaseSubmitedContent togglePopup={togglePopup} />
      ) : (
        <>
          <S.Title>Make An Offer</S.Title>
          <S.NftInfo>
            <S.InfoBlock>
              <S.Text>Current highest bid</S.Text>
              <S.PriceInCrypto>0.99 MATIC</S.PriceInCrypto>
              <S.PriceInDollars>$7.82</S.PriceInDollars>
              <S.BuyNowContainer>
                <S.BuyNowText>Buy Now Price</S.BuyNowText>
                <S.BuyNowPrice>20 MATIC</S.BuyNowPrice>
              </S.BuyNowContainer>
            </S.InfoBlock>
            <S.ImgContainer>
              <S.Image src={"/imgs/nft2.png"} layout='fill' />
            </S.ImgContainer>
          </S.NftInfo>
          <S.OfferContainer>
            <S.Input
              placeholder='Enter Offer price'
              name='offerPrice'
              label='Offer Price'
              control={control}
            />
          </S.OfferContainer>
          <S.BalanceContainer>
            <S.Span>Balance</S.Span>
            <S.CryptoBalance>20 MATIC</S.CryptoBalance>
          </S.BalanceContainer>
          <S.BalanceContainer>
            <S.Span>Amount to pay</S.Span>
            <S.AmountToPayContainer>
              <S.AmountToPayCrypto>1.55 MATIC</S.AmountToPayCrypto>
              <S.AmountToPayDollars>($12.12)</S.AmountToPayDollars>
            </S.AmountToPayContainer>
          </S.BalanceContainer>
          <S.OfferButtonsContainer>
            <S.Button type='button' onClick={togglePopup(false)}>
              Cancel
            </S.Button>
            <S.BuyNowButton type='button' onClick={handleBuyNow}>
              Buy Now
            </S.BuyNowButton>
            <S.MakeBidButton type='submit'>Make Bid</S.MakeBidButton>
          </S.OfferButtonsContainer>
        </>
      )}
    </S.Form>
  );
};
