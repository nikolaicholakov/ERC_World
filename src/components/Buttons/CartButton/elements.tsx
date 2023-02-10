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

export const ItemsInCart = styled("div")`
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

  font-family: Work Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;
