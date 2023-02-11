import { FontAwesomeIcon, Logo as _Logo, Typography } from "components";
import styled from "styled-components";
import { FooterProps } from "./Footer";

export const Footer = styled(({ ...props }: FooterProps) => <footer {...props} />)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FooterContainer = styled("div")`
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled(_Logo)`
  margin-bottom: 20px;
  width: fit-content;
`;

export const LogoText = styled(Typography.H6)`
  max-width: 287px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  &:first-of-type {
    margin-bottom: 20px;
  }
`;

export const LinksContainer = styled("div")`
  display: flex;
`;

export const LinksList = styled("ul")`
  &:first-of-type {
    margin-right: 100px;
  }
`;

export const SocialsList = styled("ul")`
  display: flex;
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 12px 16px;
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Link = styled("a")`
  ${({ theme }) => theme.typography.h6.regular}
`;

export const TokenLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export const IconListItem = styled(ListItem)`
  margin: 0;
  padding: 14px;
`;
