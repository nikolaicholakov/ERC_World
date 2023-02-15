import * as S from "./elements";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { InferType } from "yup";
import { useYupValidationResolver } from "utils";
import { createNftSchema } from "schemas";
import type { HTMLFormProps } from "types";

export type ICreateNftFormValues = InferType<typeof createNftSchema>;

export interface ICreateNftFormProps extends HTMLFormProps {}

const exampleCollections: any = [
  "Collection Name #1",
  "Collection Name #2",
  "Collection Name #3",
  "Collection Name #4",
  "Collection Name #6",
  "Collection Name #7",
  "Collection Name #8"
];

export const CreateNftForm = ({ ...props }: ICreateNftFormProps) => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [activeFormSection, setActiveFormSection] = useState<"single" | "multy">("single");

  const changeFormSection = (section: "single" | "multy") => () => {
    setActiveFormSection(section);
  };

  const resolver = useYupValidationResolver(createNftSchema);
  const form = useForm<ICreateNftFormValues>({
    resolver,
    defaultValues: {}
  });

  const { control, handleSubmit, watch } = form;

  const watchPutOnMarket = watch("putOnMarket", false);
  const watchNftName = watch("nftName", "");
  const watchAmountOfCopies = watch("amountOfCopies", 0);

  const onSubmit: SubmitHandler<ICreateNftFormValues> = async ({
    description,
    image,
    amountToSell,
    price,
    nftName,
    putOnMarket,
    amountOfCopies,
    royalty
  }) => {
    try {
      console.log(putOnMarket);
      // C:\fakepath\img ??
      setSuccessfulSubmit(true);
    } catch (error: any) {
      console.log(error);
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  };

  const [previewImgSrc, setPreviewImgSrc] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    const image = document.getElementById("image") as HTMLInputElement;
    image.addEventListener("change", getImagePreviewSrc);
    return () => image.removeEventListener("change", getImagePreviewSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImagePreviewSrc = (img): any => {
    if (img) {
      const file = img.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target !== null) {
          const src = e.target.result;
          // returns => data:image/png;base64,iVBORw0KGgoAAA...
          setPreviewImgSrc(src);
        } else return;
      };
      try {
        reader.readAsDataURL(file);
      } catch (e) {
        return;
      }
    } else return;

    return;
  };

  // console.log(previewImgSrc);

  return (
    <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle>Create NFT</S.FormTitle>
      <S.Container>
        <S.CreateNftSection>
          <S.FormTypesContainer active={activeFormSection === "multy"}>
            <S.FormType
              onClick={changeFormSection("single")}
              active={activeFormSection === "single"}
            >
              Single NFT
            </S.FormType>
            <S.FormType onClick={changeFormSection("multy")} active={activeFormSection === "multy"}>
              Multitoken
            </S.FormType>
          </S.FormTypesContainer>
          <S.UploadImage
            previewSrc={previewImgSrc}
            buttonText={previewImgSrc ? "Change file" : "Browse files"}
            control={control}
            name='image'
            label='Upload Image'
          />
          <S.SectionTitle>About NFT</S.SectionTitle>
          <S.AboutNftContainer>
            <S.Input
              control={control}
              name='nftName'
              label='Name'
              placeholder="Enter NFT's name"
              required
            />
            <S.Description
              control={control}
              name='description'
              label='Description'
              placeholder='Enter description'
              required
            />
            {activeFormSection === "multy" && (
              <S.Input
                control={control}
                name='amountOfCopies'
                label='Amount of copies'
                required
                type='number'
                placeholder='Amount of copies'
              />
            )}
            <S.Royalty
              control={control}
              name='royalty'
              label='Royalty'
              placeholder='Enter description'
              required
            />
          </S.AboutNftContainer>
          <S.SectionHeaderContainer>
            <S.ContainerTitle>Collection</S.ContainerTitle>
            <S.CreateNew type='button'>Create New</S.CreateNew>
          </S.SectionHeaderContainer>
          <S.CollectionLabel>You can select collection for your NFT</S.CollectionLabel>
          <S.CollectionsContainer>
            {exampleCollections.map((collection, i) => (
              <S.Collection
                key={"collection" + i}
                control={control}
                name='royalty'
                label={collection}
              />
            ))}
          </S.CollectionsContainer>
          <S.PutOnMarketContainer>
            <S.PutText>Put on market</S.PutText>
            <S.Toggle control={control} name='putOnMarket' />
          </S.PutOnMarketContainer>
          {watchPutOnMarket && (
            <>
              <S.SectionTitle>Sale Settings</S.SectionTitle>
              <S.SaleSettingsContainer>
                <S.Input
                  control={control}
                  name='price'
                  label='Price'
                  required
                  placeholder='Enter Price'
                />
                {activeFormSection === "multy" && (
                  <S.Input
                    control={control}
                    name='amountToSell'
                    label='Amount to sell'
                    required
                    placeholder='Amount to sell'
                  />
                )}
              </S.SaleSettingsContainer>
            </>
          )}
          <S.ButtonsContainer>
            <S.CreateAuctionButton type='submit'>Create NFT</S.CreateAuctionButton>
          </S.ButtonsContainer>
        </S.CreateNftSection>
        <S.PreviewSection>
          <S.PreviewTitle>Preview</S.PreviewTitle>
          <S.PreviewNft
            amountOfCopies={watchAmountOfCopies}
            multiple={activeFormSection === "multy"}
            nftName={watchNftName}
            image={previewImgSrc}
          />
        </S.PreviewSection>
      </S.Container>
    </S.Form>
  );
};

export {};
