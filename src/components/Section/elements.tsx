import { Typography, Button as _Button } from "components";
import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const SectionWrapper = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding-inline: 60px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-inline: 30px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-inline: 15px;
  }
`;
