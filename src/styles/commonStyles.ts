import { css, FlattenSimpleInterpolation } from "styled-components";

export interface TypographyStylesProps {
  h1: { regular: any };
  h2: { regular: any };
  h3: { regular: any };
  h4: { regular: any };
  h5: { regular: any };
  h6: { regular: any };
  h7: { regular: any };
  p: {
    regular: any;
  };
  loadMoreButtonText: {
    regular: any;
  };
  userName: {
    regular: any;
  };
}

export const typography: TypographyStylesProps = {
  h1: {
    regular: css`
      font-family: Work Sans;
      font-size: 48px;
      font-weight: 600;
      line-height: 1.17;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 40px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 30px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 22px;
      }
    `
  },
  h2: {
    regular: css`
      font-family: Work Sans;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.18;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 30px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 28px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 24px;
      }
    `
  },
  h3: {
    regular: css`
      font-family: Work Sans;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.17;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 22px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 20px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 18px;
      }
    `
  },
  h4: {
    regular: css`
      font-family: Work Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.17;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 16px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 15px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 14px;
      }
    `
  },
  h5: {
    regular: css`
      font-family: Work Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.19;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 15px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 12px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 11px;
      }
    `
  },
  h6: {
    regular: css`
      font-family: Work Sans;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 13px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 11px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 10px;
      }
    `
  },
  h7: {
    regular: css`
      font-family: Work Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.17;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 11px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 10px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 10px;
      }
    `
  },
  p: {
    regular: css``
  },
  loadMoreButtonText: {
    regular: css`
      font-family: Campton;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 16px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 15px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 14px;
      }
    `
  },
  userName: {
    regular: css`
      font-family: Campton;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;

      @media ${({ theme }) => theme.breakpoint.max.L} {
        font-size: 18px;
      }

      @media ${({ theme }) => theme.breakpoint.max.M} {
        font-size: 17px;
      }

      @media ${({ theme }) => theme.breakpoint.max.S} {
        font-size: 15px;
      }
    `
  }
};
