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
    | "swiperActive"
    | "swiperInActive"
    | "sectionHeadersColor"
    | "loadMoreButtonBackground"
    | "bodyBackground"
    | "notificationBackground";

  type Gradients = "administratorGradiant" | "userGradient";

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointsValuesType;
  };

  export interface DefaultTheme {
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
