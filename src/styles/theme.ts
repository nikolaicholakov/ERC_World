import { DefaultTheme } from "styled-components";
import { breakpoints, maxWidth, minWidth } from "./breakpoints";
import { typography } from "./commonStyles";

export const theme: DefaultTheme = {
  colors: {
    mainTextColor: "#211D2A",
    popupBackground: "#211D2A",
    secondaryTextColor: "#717186",
    white: "#FFFFFF",
    grey: "#ECECEC",
    buttonColor: "#0B61E1",
    swiperActive: "#4A5055",
    swiperInActive: "#03030329",
    sectionHeadersColor: "#292D3F",
    loadMoreButtonBackground: "#0B61E114",
    notificationBackground: "#FF0000",
    bodyBackground: "#B6B6B6"
  },
  typography,
  gradients: {
    administratorGradiant: "linear-gradient(90deg, #F64C72 0%, #FF9F69 104.26%)",
    userGradient: "linear-gradient(89.92deg, #2C5CD8 0.06%, #366EFF 99.93%)"
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints
  }
};
