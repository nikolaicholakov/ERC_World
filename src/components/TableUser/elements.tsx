import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const Container = styled("div")`
  display: flex;
  align-items: center;
`;

export const ImgWrapper = styled("div")`
  display: flex;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;

  margin-right: 16px;
`;

export const Name = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
`;
