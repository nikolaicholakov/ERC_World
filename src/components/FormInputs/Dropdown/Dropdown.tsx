import { ForwardedRef } from "react";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import type { KeyOfType, HTMLInputProps } from "types";
import * as S from "./elements";

export interface DropdownProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const Dropdown = ({ name, control, label, ...props }: DropdownProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: false },
    defaultValue: ""
  });

  return (
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
  );
};

Dropdown.displayName = "Dropdown";
