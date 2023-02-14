import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled from "styled-components";

export const Input = styled("input")`
  border: none;
  background-color: transparent;
  outline: none;
  display: none;
`;

export const Label = styled("label")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LabelText = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.white};
`;
