import { ForwardedRef } from "react";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import type { KeyOfType, HTMLInputProps } from "types";
import * as S from "./elements";

export interface FormDropdownInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  required?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const FormDropdownInput = ({
  name,
  control,
  label,
  required,
  ...props
}: FormDropdownInputProps) => {
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
        {label && label}
        {required && <S.RequiredIcon content='\2a' font='--fa-font-solid' />}
      </S.LabelText>
      <S.InputContainer {...props}>
        <S.Input
          {...props}
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
        />
      </S.InputContainer>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Label>
  );
};

FormDropdownInput.displayName = "FormDropdownInput";
