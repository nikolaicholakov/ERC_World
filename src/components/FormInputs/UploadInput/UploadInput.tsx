import { ForwardedRef } from "react";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import type { KeyOfType, HTMLInputProps } from "types";
import * as S from "./elements";

export interface UploadInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const UploadInput = ({ name, control, label, ...props }: UploadInputProps) => {
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
      <S.LabelText>
        <S.Icon content='\f0ee' font='--fa-font-solid' />
        Upload
      </S.LabelText>
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
    </S.Label>
  );
};

UploadInput.displayName = "UploadInput";
