import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  border-radius: 4px;
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.buttonColor};
  background-color: transparent;

  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.buttonColor};
`;
