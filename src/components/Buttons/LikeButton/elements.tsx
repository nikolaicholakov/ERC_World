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

  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)<{ liked: boolean }>`
  color: ${({ liked, theme }) => (liked ? theme.colors.buttonColor : theme.colors.white)};

  font-size: 18px;
`;
