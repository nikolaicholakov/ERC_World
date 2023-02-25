import * as S from "./elements";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { InferType } from "yup";
import { useYupValidationResolver } from "utils";
import { auctionSellNftSchema } from "schemas";
import type { HTMLFormProps } from "types";

export type TAuctionSellNftForm = InferType<typeof auctionSellNftSchema>;

export interface AuctionSellNftFormProps extends HTMLFormProps {
  togglePopup: (state: boolean) => () => void;
}

export const AuctionSellNftForm = ({ togglePopup, ...props }: AuctionSellNftFormProps) => {
  const [successfulAuctionSubmit, setSuccessfulAuctionSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolver = useYupValidationResolver(auctionSellNftSchema);
  const form = useForm<TAuctionSellNftForm>({
    resolver,
    defaultValues: {
      duration: 0,
      startData: 0
    }
  });

  const { control, handleSubmit } = form;

  const onSubmit: SubmitHandler<TAuctionSellNftForm> = async ({
    startPrice,
    buyNowPrice,
    duration,
    minimumSteps,
    startData
  }) => {
    try {
      setSuccessfulAuctionSubmit(true);
      togglePopup(false)();
    } catch (error: any) {
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  };

  return (
    <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Auction Sell</S.Title>
      <S.InputsContainer>
        <S.Input
          control={control}
          name='startPrice'
          label='Start Price'
          placeholder='Enter Start Price'
        />
        <S.Input
          control={control}
          name='minimumSteps'
          label='Minimum step between auction bids'
          placeholder='Insert auction step value'
        />
        <S.Input
          control={control}
          type='datetime-local'
          name='startData'
          label='Auction start date'
        />
        <S.SelectDurationInput control={control} name='duration' label='Auction duration' />
        <S.Input
          control={control}
          name='buyNowPrice'
          label='Buy Now Price'
          placeholder='Insert Buy Now Price'
        />
      </S.InputsContainer>
      <S.ToReceiveContainer>
        <S.Text>Total to receive</S.Text>
        <S.Wrapper>
          <S.PriceInCrypto>18 MATIC</S.PriceInCrypto>
          <S.PriceInDollars>($22.83)</S.PriceInDollars>
        </S.Wrapper>
      </S.ToReceiveContainer>
      <S.ButtonsContainer>
        <S.CancelButton type='button' onClick={togglePopup(false)}>
          Cancel
        </S.CancelButton>
        <S.CreateAuctionButton type='submit'>Create Auction</S.CreateAuctionButton>
      </S.ButtonsContainer>
    </S.Form>
  );
};

export {};
