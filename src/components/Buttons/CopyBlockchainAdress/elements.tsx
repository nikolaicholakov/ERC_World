import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  color: ${({ theme }) => theme.colors.mainTextColor};
  background-color: transparent;

  ${({ theme }) => theme.typography.h6.regular}

  cursor:pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
