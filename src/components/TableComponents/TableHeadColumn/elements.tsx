import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const TableHeadColumn = styled("th")`
  ${({ theme }) => theme.typography.h6.regular}
  color:${({ theme }) => theme.colors.secondaryTextColor};
  font-weight: 400;
  padding: 16px 24px;

  text-align: left;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 10px 18px;
  }
`;
