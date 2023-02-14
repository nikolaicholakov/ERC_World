import * as S from "./elements";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { InferType } from "yup";
import { useYupValidationResolver } from "utils";
import { sellNftSchema } from "schemas";
import type { HTMLFormProps } from "types";

export type SellNftFormValues = InferType<typeof sellNftSchema>;

export interface SellNftFormProps extends HTMLFormProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
}

export const SellNftForm = ({ popupOpened, togglePopup, ...props }: SellNftFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [sellSubmited, setSellSubmited] = useState<boolean>(false);

  const submitSell = () => {
    setSellSubmited(true);
    togglePopup(false)();
  };

  const resolver = useYupValidationResolver(sellNftSchema);
  const form = useForm<SellNftFormValues>({
    resolver
  });

  const { control, handleSubmit } = form;

  const onSubmit: SubmitHandler<SellNftFormValues> = async ({ price }) => {
    try {
      console.log(price);
      submitSell();
    } catch (error: any) {
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  };

  return (
    <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <S.DropdownInput placeholder='Enter Price' control={control} label={"Price"} name='price' />
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
        <S.SellButton type='submit'>Create Sell Offer</S.SellButton>
      </S.ButtonsContainer>
    </S.Form>
  );
};
