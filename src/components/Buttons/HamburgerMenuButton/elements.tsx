import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import styled, { css } from "styled-components";

export const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    width: 40px;
    font-size: 40px;
    align-self: center;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.sectionHeadersColor};
`;
