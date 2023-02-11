import * as S from "./elements";
import type { HTMLFooterProps } from "types";

export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <S.Footer {...props}>
      <S.FooterContainer>
        <S.LogoContainer>
          <S.Logo />
          <S.LogoText>© 2022 ERC World Inc.</S.LogoText>
          <S.LogoText>
            Trademarks and brands are the property of their respective owners.
          </S.LogoText>
        </S.LogoContainer>
        <S.LinksContainer>
          <S.LinksList>
            <S.ListItem>
              <S.Link href='#'>Marketplace</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href='#'>Launchpad</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href='#'>Staking</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.TokenLink href='#'>Buy $ERC Token</S.TokenLink>
            </S.ListItem>
          </S.LinksList>
          <S.LinksList>
            <S.ListItem>
              <S.Link href='#'>About Us</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href='#'>Contact Us</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href='#'>Submit Collection</S.Link>
            </S.ListItem>
          </S.LinksList>
          <S.SocialsList>
            <S.IconListItem>
              <S.Link>
                <S.Icon content='\f099' font='--fa-font-brands' />
              </S.Link>
            </S.IconListItem>
            <S.IconListItem>
              <S.Link>
                <S.Icon content='\f39e' font='--fa-font-brands' />
              </S.Link>
            </S.IconListItem>
            <S.IconListItem>
              <S.Link>
                <S.Icon content='\f392' font='--fa-font-brands' />
              </S.Link>
            </S.IconListItem>
          </S.SocialsList>
        </S.LinksContainer>
      </S.FooterContainer>
    </S.Footer>
  );
};
