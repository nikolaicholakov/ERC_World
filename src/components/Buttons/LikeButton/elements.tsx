import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  border-radius: 12px;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  ${({ theme }) => theme.typography.h6.regular}

  cursor: pointer;
`;

export const Text = styled("span")<{ liked: boolean }>`
  color: ${({ liked, theme }) => (liked ? theme.colors.buttonColor : "inherit")};
  margin-right: 5px;
`;

export const Icon = styled(FontAwesomeIcon)<{ liked: boolean }>`
  color: ${({ liked, theme }) => (liked ? theme.colors.buttonColor : "inherit")};
  font-size: inherit;
`;
