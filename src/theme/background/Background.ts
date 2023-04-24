import babybg from "../../imgs/babybg.jpeg";
const psedo = {
  content: '""',
  position: "absolute",
  top: "0",
  right: "0",
  width: "full",
  height: "full",
};
export const mainBackground = {
  w: "full",
  h: "fullContainer",
  bg: "primary_color",
  position: "relative",
  overflow: "hidden",
  _before: {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "full",
    height: "fullContainer",
    bg: "secondary_color",
    clipPath: "polygon(0% 0%, 40% 0%, 65% 100%, 0% 100%)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const subBackground = {
  borderRadius: "xl",
  w: "6xl",
  minH: "600px",
  bg: "white",
  position: "relative",
  overflow: "hidden",
  zIndex: "docked",
  boxShadow: "lg",
  _before: {
    ...psedo,
    background: ` url(${babybg}) no-repeat right`,
    backgroundSize: "60%",
    clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 64.3% 100%)",
  },
  _after: {
    ...psedo,
    backgroundColor: "secondary_color",
    opacity: "0.8",
    clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 64.3% 100%)",
  },
};

export const toastBackground = {
  color: "white",
  py: "3",
  px: "5",
  bg: "white",
  alignItems: "center",
  gap: "2",
  boxShadow: "xl",
  rounded: "xl",
};

export const tagBackground = {
  alignItems: "center",
  borderColor: "grey.250",
  borderWidth: "1px",
  p: "1",
  borderRadius: "lg",
  gap: "1",
};
export const navbarBackground = {
  zIndex: "dropdown",
  bg: "grey.100",
  boxShadow: "md",
  position: "sticky",
  top: "0",
  left: "0",
};
export const backgroundIconToast = {
  p: "6",
  w: "fit-content",
  h: "full",
  borderRadius: "full",
};
export const backgroundIconNotification = {
  bg: "none",
  fontSize: "3xl",
  size: "md",
  _hover: {
    bg: `none`,
  },
  _active: {
    bg: `none`,
  },
};
export const backgroundAmountNotification = {
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bg: "red.800",
  top: "0",
  right: "1",
  color: "white",
  w: "5",
  h: "5",
  borderRadius: "full",
};
export const backgroundOverlay = {
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  w: "full",
  h: "100vh",
  bg: "rgba(0,0,0,0.7)",
  top: "0",
  left: "0",
  zIndex: "overlay",
};
export const backgroundImageBabyProfile = {
  position: "relative",
  w: "3xl",
  h: "96",
  borderRadius: "lg",
  overflow: "hidden",
  marginBottom: "7",
  _before: {
    content: "''",
    position: "absolute",
    w: "full",
    bottom: "0",
    left: "0",
    h: "40%",
    bg: "linear-gradient(180deg, rgba(47, 48, 49, 0) 1.48%, #000000 100%)",
    zIndex: "docked",
  },
  boxShadow: "2xl",
};
export const textBackgroundImageBabyProfile = {
  position: "absolute",
  bottom: "5",
  left: "50%",
  transform: "translateX(-50%)",
  fontFamily: "Kalam",
  color: "white",
  fontSize: "2xl",
  zIndex: "dropdown",
};
export const backgroundFlexProfile = {
  alignItems: "center",
  justifyContent: "center",
  w: "6",
  h: "6",
  cursor: "pointer",
};
export const backgroundTextProfile = {
  fontSize: "15",
  fontWeight: "bold",
  color: "secondary_color",
  position: "absolute",
};
export const backgroundBoxProfile = {
  borderRadius: "xl",
  w: "32",
  px: "6",
  py: "3",
  bg: "border",
  position: "absolute",
};
export const backgroundBoxBeforeProfile = {
  content: "''",
  position: "absolute",
  w: "3",
  h: "3",
  bg: "border",
  transform: "rotate(45deg)",
};
export const backgroundModalProfile = {
  w: "6",
  h: "6",
  border: "1px solid #E3A5A8",
  borderRadius: "full",
  cursor: "pointer",
};

export const columnExperience = {
  content: "''",
  position: "absolute",
  h: "full",
  w: "1",
  top: "0",
  left: "0",
  bg: "grey.300",
  borderRadius: "full",
};
export const hastagExperience = {
  content: "''",
  position: "absolute",
  w: "2",
  h: "2",
  bg: "grey.100",
  bottom: "-1",
  left: "50%",
  transform: "rotate(45deg) translateX(-50%)",
};
export const textHastag = {
  shadow: "md",
  p: "1",
  fontSize: "12",
  fontStyle: "italic",
  position: "absolute",
  top: "-10",
  borderRadius: "md",
  left: "3",
  bg: "grey.100",
};
export const linkBgExperience = {
  fontSize: "13",
  position: "relative",
  color: "blue_sky",
  fontWeight: "bold",
  fontStyle: "italic",
  _after: {
    content: "''",
    position: "absolute",
    w: "full",
    h: "1px",
    bottom: "1",
    left: "0",
    bg: "blue_sky",
    opacity: "0.8",
  },
};
export const bgBannerItems = {
  align: "center",
  gap: "2",
  px: "2",
  py: "1",
  bg: "grey.300",
  borderRadius: "full",
  w: "56",
};
