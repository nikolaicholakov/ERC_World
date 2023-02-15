import { Typography } from "components/Typography";
import styled from "styled-components";

export const Label = styled("label")`
  width: 100%;
  cursor: ponter;
`;

export const Text = styled("span")`
  ${({ theme }) => theme.typography.h6.regular}white-space:nowrap;
  line-height: 16px;
`;

export const ErrorText = styled("p")``;

export const Input = styled("input")`
  width: 34px;
  height: 16px;
  cursor: pointer;
  margin: 0;
  border: none;
  outline: none;
  -webkit-appearance: none;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  background-color: #cdcdcd;
  ${({ theme }) => theme.typography.h6.regular};

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    height: 16px;
    width: 15px;
    background-color: ${({ theme }) => theme.colors.secondaryTextColor};
    transition: transform 0.5s ease;
  }

  &:checked {
    &::after {
      background-color: ${({ theme }) => theme.colors.buttonColor};
      transform: translateX(19px);
    }
  }
`;

export const InputContainer = styled("div")`
  display: flex;
  cursor: pointer;
  padding: 16px;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  /* margin-bottom: 24px; */
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;
