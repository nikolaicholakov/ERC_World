import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

export const Button = styled("button")<ButtonProps>`
  border-radius: 12px;
  padding: 14px 16px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  ${({ theme }) => theme.typography.h6.regular}

  cursor:pointer;
`;
