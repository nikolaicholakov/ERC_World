import { Typography, Button as _Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";
// import { UnderLinedButton } from "components/Buttons";

export const Container = styled("div")``;

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
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
export const SubTitle = styled(Typography.H5)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
