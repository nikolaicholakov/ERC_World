import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const Container = styled("a")`
  padding: 10px 27px;
  background-color: #2c850d;
  width: fit-content;
`;

export const Text = styled("span")`
  // this logo will be a picture so thats why
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;

  color: ${({ theme }) => theme.colors.white};
`;
