import { Typography, Button as _Button } from "components";
import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const SectionWrapper = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: 0 30px; */

  @media ${({ theme }) => theme.breakpoint.max.S} {
    /* padding: 0 20px; */
  }
`;
