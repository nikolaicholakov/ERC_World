import "styled-components";
import {
  BreakpointsValuesType,
  MaxWidthBreakpointsType,
  MinWidthBreakpointsType,
  TypographyStylesProps
} from "styles";

declare module "styled-components" {
  type Colors =
    | "mainTextColor"
    | "secondaryTextColor"
    | "popupBackground"
    | "buttonColor"
    | "grey"
    | "white"
    | "lightButtonColor"
    | "swiperActive"
    | "tableRowBackground"
    | "swiperInActive"
    | "sectionHeadersColor"
    | "loadMoreButtonBackground"
    | "scrollbarTrack"
    | "scrollbarThumb"
    | "bodyBackground"
    | "notificationBackground";

  type Gradients = "administratorGradiant" | "userGradient" | "trendingCollectionShadow";

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointsValuesType;
  };

  type Shadows = { headerShadow: string; cardsShadow: string };

  export interface DefaultTheme {
    shadows: Shadows;
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
