import * as S from "./elements";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { InferType } from "yup";
import { useYupValidationResolver } from "utils";
import { editProfileSchema } from "schemas";
import type { HTMLFormProps } from "types";

export type IEditProfileForm = InferType<typeof editProfileSchema>;

export interface EditProfileFormProps extends HTMLFormProps {}

export const EditProfileForm = ({ ...props }: EditProfileFormProps) => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolver = useYupValidationResolver(editProfileSchema);
  const form = useForm<IEditProfileForm>({
    resolver,
    defaultValues: {}
  });

  const { control, handleSubmit } = form;

  const onSubmit: SubmitHandler<IEditProfileForm> = async ({
    backgroundImage,
    bio,
    email,
    profileImage,
    twoFactorAuth,
    userName
  }) => {
    try {
      console.log(profileImage);
      // C:\fakepath\img ??
      setSuccessfulSubmit(true);
    } catch (error: any) {
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  };

  return (
    <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <S.ProfileImageContainer>
        <S.UploadFileInput control={control} name='profileImage' />
      </S.ProfileImageContainer>
      <S.CopyWalletButton type='button' />
      <S.DisconnectWalletButton type='button'>Disconnect</S.DisconnectWalletButton>
      <S.BackgroundImageContainer>
        <S.Text>Background Image</S.Text>
        <S.UploadBackgroundImageContainer>
          <S.UploadFileInput control={control} name='backgroundImage' />
        </S.UploadBackgroundImageContainer>
      </S.BackgroundImageContainer>
      <S.InputsContainer>
        <S.FormInput control={control} name='email' label='Email' placeholder='Your Email' />
        <S.FormInput
          control={control}
          name='twoFactorAuth'
          label='2FA Google Authenticator'
          placeholder='Disabled'
          disabled
        />
        <S.FormInput
          control={control}
          placeholder='Your User Name'
          name='userName'
          label='User Name'
        />
        <S.BioInput
          control={control}
          name='bio'
          label='A few words about you...'
          placeholder='A few words about you...'
        />
      </S.InputsContainer>
      <S.ConnectMessengerContainer>
        <S.ContainerTitle>Connect Messenger</S.ContainerTitle>
        <S.SmallText>You will receive notifications about the purchase and sale of NFT</S.SmallText>
        <S.SocialsContainer>
          <S.SocialPlatform>
            <S.SocialPlatformName>Telegram</S.SocialPlatformName>
            <S.CurrentStatus status='disconnected'>Connect</S.CurrentStatus>
          </S.SocialPlatform>
          <S.SocialPlatform>
            <S.SocialPlatformName>Discord</S.SocialPlatformName>
            <S.CurrentStatus status='connected'>Diconect</S.CurrentStatus>
          </S.SocialPlatform>
        </S.SocialsContainer>
      </S.ConnectMessengerContainer>
      <S.ButtonsContainer>
        <S.CreateAuctionButton type='submit'>Save Changes</S.CreateAuctionButton>
      </S.ButtonsContainer>
    </S.Form>
  );
};

export {};
