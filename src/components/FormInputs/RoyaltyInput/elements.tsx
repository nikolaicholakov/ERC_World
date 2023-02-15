import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import { Typography } from "components/Typography";
import styled from "styled-components";

export const Label = styled("label")`
  width: 100%;
`;

export const LabelText = styled(Typography.H7)`
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const ErrorText = styled("p")``;

export const Input = styled("input")`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 14px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;

export const InputContainer = styled("div")`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export const RequiredIcon = styled(FontAwesomeIcon)`
  margin-left: 3px;
  pointer-events: none;
  font-size: 8px;
  display: inline;
  top: -2px;
  color: ${({ theme }) => theme.colors.required};
`;

export const RoyaltyInfo = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  &::after {
    content: "royalty info royalty info royalty info royalty info";
    white-space: nowrap;
    display: block;
    /* overflow: auto; */
    border-radius: 4px;
    position: absolute;
    top: -30px;
    left: 0;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.secondaryTextColor};
    color: ${({ theme }) => theme.colors.white};
    display: none;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`;

export const PercentIcon = styled("span")`
  position: absolute;
  font-size: 14px;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
