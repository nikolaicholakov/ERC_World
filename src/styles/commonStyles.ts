import { css, FlattenSimpleInterpolation } from "styled-components";

export interface TypographyStylesProps {
  h1: { regular: FlattenSimpleInterpolation };
  h2: { regular: FlattenSimpleInterpolation };
  h3: { regular: FlattenSimpleInterpolation };
  h4: { regular: FlattenSimpleInterpolation };
  h5: { regular: FlattenSimpleInterpolation };
  h6: { regular: FlattenSimpleInterpolation };
  h7: { regular: FlattenSimpleInterpolation };
  p: {
    regular: FlattenSimpleInterpolation;
  };
  loadMoreButtonText: {
    regular: FlattenSimpleInterpolation;
  };
  userName: {
    regular: FlattenSimpleInterpolation;
  };
}

export const typography: TypographyStylesProps = {
  h1: {
    regular: css`
      font-family: Work Sans;
      font-size: 48px;
      font-weight: 600;
      line-height: 1.17;
    `
  },
  h2: {
    regular: css`
      font-family: Work Sans;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.18;
    `
  },
  h3: {
    regular: css`
      font-family: Work Sans;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.17;
    `
  },
  h4: {
    regular: css`
      font-family: Work Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.17;
    `
  },
  h5: {
    regular: css`
      font-family: Work Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.19;
    `
  },
  h6: {
    regular: css`
      font-family: Work Sans;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
    `
  },
  h7: {
    regular: css`
      font-family: Work Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.17;
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
    `
  }
};
