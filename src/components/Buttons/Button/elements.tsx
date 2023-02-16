import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

export const Button = styled("button")<ButtonProps>`
  border-radius: 12px;
  padding: 14px 16px;
  text-align: center;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  ${({ theme }) => theme.typography.h6.regular}

  cursor:pointer;
  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 10px 12px;
  }
`;
