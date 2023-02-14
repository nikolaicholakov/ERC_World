import styled, { css } from "styled-components";
import { Button as _Button, FontAwesomeIcon, Typography } from "components";

export const SubmitedContainer = styled("div")`
  width: 100%;

  padding-block: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SuccessTitle = styled(Typography.H4)`
  margin-bottom: 24px;
`;

export const Message = styled(Typography.H6)`
  font-weight: 400;
  margin-bottom: 8px;
`;

export const TransactionLinkContainer = styled("a")`
  cursor: pointer;
  ${({ theme }) => theme.typography.h6.regular};
  color: ${({ theme }) => theme.colors.lightButtonColor};
  margin-bottom: 40px;
`;
export const NewWindowIcon = styled(FontAwesomeIcon)`
  margin-left: 6px;
  display: inline-block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightButtonColor};
`;
export const ButtonsContainer = styled("div")`
  display: flex;
`;

export const Button = styled(_Button)`
  width: 120px;
  height: 40px;
  padding: 0px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
