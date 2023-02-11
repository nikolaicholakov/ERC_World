import styled, { css } from "styled-components";

export const Button = styled("button")`
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  text-align: center;
  border: none;
  color: ${({ theme }) => theme.colors.buttonColor};
  background-color: ${({ theme }) => theme.colors.buttonColor}1f;

  ${({ theme }) => theme.typography.loadMoreButtonText.regular};
  line-height: 28px;
  font-weight: 500;

  cursor: pointer;
`;
