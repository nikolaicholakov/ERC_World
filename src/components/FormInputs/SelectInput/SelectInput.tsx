import { ForwardedRef } from "react";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import { KeyOfType } from "types";
import * as S from "./elements";

export interface ISelectInput<T extends FieldValues = any>
  extends Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  ref?: ForwardedRef<HTMLSelectElement>;
}

export const SelectInput = ({ name, control, label, ...props }: ISelectInput) => {
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
      <S.InputContainer>
        <S.Select
          {...props}
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
        >
          <S.Option value=''>--Select Days--</S.Option>
          <S.Option value='1'>1 Day</S.Option>
          <S.Option value='3'>3 Days</S.Option>
          <S.Option value='5'>5 Days</S.Option>
          <S.Option value='7'>7 Days</S.Option>
        </S.Select>
      </S.InputContainer>
    </S.Label>
  );
};

SelectInput.displayName = "SelectInput";
