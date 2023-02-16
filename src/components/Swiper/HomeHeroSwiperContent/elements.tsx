import { Typography, Button as _Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";
// import { UnderLinedButton } from "components/Buttons";

export const Container = styled("div")`
  width: 100%;
  height: 494px;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    height: auto;
    padding-top: 54%;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-top: 65%;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-top: 80%;
  }
`;

export const Image = styled(_Image)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  border-radius: 8px;
`;

export const TextContainer = styled("div")`
  position: absolute;
  left: 40px;
  bottom: 75px;
  max-width: 414px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    left: 20px;
    bottom: 50px;
    max-width: 70%;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    left: 20px;
    bottom: 20px;
    max-width: 70%;
  }
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
export const SubTitle = styled(Typography.H5)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
