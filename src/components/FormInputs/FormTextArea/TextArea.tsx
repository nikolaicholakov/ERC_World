import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import type { KeyOfType, HTMLTextAreaProps } from "types";
import * as S from "./elements";

export interface FormTextAreaProps<T extends FieldValues = any>
  extends Omit<HTMLTextAreaProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  required?: boolean;
  label?: string;
}

export const FormTextArea = ({ required, name, control, label, ...props }: FormTextAreaProps) => {
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
      {required && <S.RequiredIcon content='\2a' font='--fa-font-solid' />}
      <S.InputContainer>
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

FormTextArea.displayName = "FormTextArea";
