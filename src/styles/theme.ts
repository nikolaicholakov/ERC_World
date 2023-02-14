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
    lightButtonColor: "#3682F4",
    swiperActive: "#4A5055",
    swiperInActive: "#03030329",
    sectionHeadersColor: "#292D3F",
    loadMoreButtonBackground: "#0B61E114",
    notificationBackground: "#FF0000",
    bodyBackground: "#F9F9F9",
    tableRowBackground: "#FAFAFA",
    scrollbarTrack: "#71718626",
    scrollbarThumb: "#2A2A3A33",
    inputBorder: "#292D3F21",
    inputBackground: "#292D3F08"
  },
  typography,
  gradients: {
    administratorGradiant: "linear-gradient(90deg, #F64C72 0%, #FF9F69 104.26%)",
    userGradient: "linear-gradient(89.92deg, #2C5CD8 0.06%, #366EFF 99.93%)",
    trendingCollectionShadow: "linear-gradient(270deg, #F9F9F9 0.75%, rgba(249, 249, 249, 0.01))"
  },
  shadows: {
    headerShadow: "0px 8px 24px 0px #0000000F",
    cardsShadow: "0px 8px 10px 0px #8381960F"
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints
  }
};
