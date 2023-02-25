import { ForwardedRef, } from "react";
import { useController, UseControllerProps, FieldValues,  } from "react-hook-form";
import type { KeyOfType, HTMLInputProps } from "types";
import * as S from "./elements";

export interface UploadImageInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  buttonText: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const UploadImageInput = ({
  buttonText,
  name,
  control,
  label,
  ...props
}: UploadImageInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ""
  });

  return (
    <S.Label>
      <S.LabelText>{label && label}</S.LabelText>
      <S.InputContainer imageUploaded={buttonText === "Change file"} {...props}>
        <S.Input
          {...props}
          type='file'
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
        />
        <S.MessageContainer>
          <S.LightText imageUploaded={buttonText === "Change file"}>
            Drag&Drop your file or
          </S.LightText>
          <S.BrowseButton imageUploaded={buttonText === "Change file"}>{buttonText}</S.BrowseButton>
          <S.SmallText imageUploaded={buttonText === "Change file"}>
            JPG, PNG, SVG, GIF. Max size: 100 MB
          </S.SmallText>
        </S.MessageContainer>
      </S.InputContainer>
    </S.Label>
  );
};

UploadImageInput.displayName = "UploadImageInput";
