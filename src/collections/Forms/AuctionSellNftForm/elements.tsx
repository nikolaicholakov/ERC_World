import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormDropdownInput,
  FormDropdownInput as _FormInput,
  FormTextArea as _FormTextArea,
  SelectInput,
  Typography
} from "components";

export const Form = styled("form")``;

export const Title = styled(Typography.H4)`
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
`;

export const Description = styled("p")``;

export const Actions = styled("div")`
  margin-top: 24px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

export const CancelButton = styled(_Button)`
  width: 154px;
  height: 40px;
  padding: 0px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const CreateAuctionButton = styled(_Button)`
  width: 154px;
  height: 40px;
  padding: 0px;
  border-radius: 4px;
  margin-left: 16px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightButtonColor};
`;

export const Input = styled(FormDropdownInput)``;

export const InputsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  > * {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const ToReceiveContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Text = styled(Typography.H6)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const PriceInCrypto = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-right: 4px;
  text-align: left;
`;

export const PriceInDollars = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: left;
`;

export const SelectDurationInput = styled(SelectInput)``;
