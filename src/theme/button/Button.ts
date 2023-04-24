import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
const baseStyle = defineStyle({
  borderRadius: 0,
  fontFamily: "Open Sans",
});

const customButtonBase = defineStyle({
  fontFamily: "Open Sans",
  bg: `purpleButton.500`,
  fontWeight: "semibold",
  color: "white",

  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  _hover: {
    bg: `purpleButton.600`,
  },
  _active: {
    bg: `purpleButton.700`,
  },
});
const buttonSearch = defineStyle({
  bg: `font_color.50`,
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  _hover: {
    bg: `font_color.100`,
  },
  _active: {
    bg: `font_color.200`,
  },
});

const customButtonReject = defineStyle({
  bg: `reject_button.100`,
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  boxShadow: "xl",
  _hover: {
    bg: `reject_button.200`,
  },
  _active: {
    bg: `reject_button.300`,
  },
  _disabled: {
    bg: "reject_button.200 !important",
  },
  p: "6",
  h: "full",
  borderRadius: "full",
});
const customButtonAccept = defineStyle({
  bg: `purpleButton.500`,
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  boxShadow: "xl",
  _hover: {
    bg: `purpleButton.600`,
  },
  _active: {
    bg: `purpleButton.700`,
  },
  _disabled: {
    bg: "purpleButton.600 !important",
  },
  p: "6",
  h: "full",
  borderRadius: "full",
});
const customIconModify = defineStyle({
  fontSize: "xl",
  p: "0",
  color: "grey.550",
  bg: "transparent",
  _hover: {
    bg: `none`,
  },
  _active: {
    bg: `none`,
  },
  h: "fit-content",
});
const customButtonSendMatch = defineStyle({
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  py: "0",
  color: "#ffffff",
  fontSize: "sm",
  mt: "4",
  bg: "primary_color",
  _hover: {
    bg: `font_colot.100`,
  },
  _active: {
    bg: `font_colot.200`,
  },
});
export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    customButtonBase: customButtonBase,
    buttonSearch: buttonSearch,
    reject: customButtonReject,
    accept: customButtonAccept,
    iconModify: customIconModify,
    sendMatch: customButtonSendMatch,
    editCharactic: customButtonSendMatch,
  },
});
