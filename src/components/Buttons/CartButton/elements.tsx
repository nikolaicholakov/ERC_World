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

export const ItemsInCart = styled("span")`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.notificationBackground};
  position: absolute;
  top: -3px;
  right: -3px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.typography.h7.regular};
  font-weight: 500;
  text-align: center;
`;
