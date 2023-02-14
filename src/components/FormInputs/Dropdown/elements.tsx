import { Typography } from "components/Typography";
import styled from "styled-components";

export const Input = styled("input")`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 14px;
  padding-left: 16px;
  padding-right: 100px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;
