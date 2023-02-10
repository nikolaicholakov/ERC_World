import { Typography, Button as _Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import { IFontAwesomeIcon } from "types";

export const Image = styled(_Image)``;

export const Icon = styled("span")<IFontAwesomeIcon>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 15px;
  height: 18px;
  z-index: 1;
  color: inherit;

  &::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    content: "${({ content }) => content}";
    color: inherit;
    font: var(${({ font }) => font});

    transition: color 0.3s ease;
  }
`;
