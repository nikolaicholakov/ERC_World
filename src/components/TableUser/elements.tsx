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

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0;
    width: 36px;
    height: 36px;
  }
`;

export const Name = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
`;
