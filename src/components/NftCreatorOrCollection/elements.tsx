import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const Container = styled("div")`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled("div")`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;

export const TextBlock = styled("div")`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.white};
`;

export const Type = styled("span")`
  text-transform: capitalize;
  margin-bottom: 5px;
  ${({ theme }) => theme.typography.h7.regular}
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Name = styled("span")`
  text-transform: capitalize;
  ${({ theme }) => theme.typography.h6.regular}
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
