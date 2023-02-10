import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  border-radius: 12px;
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  ${({ theme }) => theme.typography.h6.regular}

  cursor:pointer;
  border: 1px solid ${({ theme }) => theme.colors.sectionHeadersColor}5f;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.sectionHeadersColor};
`;
