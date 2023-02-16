import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const SpacingRow = styled("tr")`
  height: 16px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    height: 10px;
  }
`;
