import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: 12px;
`;

export const Text = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  display: inline-block;
  white-space: nowrap;
  margin-right: 4px;
`;
