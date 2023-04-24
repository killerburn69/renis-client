import React from "react";
import { Box } from "@chakra-ui/react";
import { navbarBackground } from "../theme/background/Background";
import Navbar from "./Navbar";
import Search from "./Search";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";
const NavbarWrapper = () => {
  const location = useLocation();
  return (
    <Box sx={navbarBackground}>
      <Navbar />
      {location.pathname === "/home" && (
        <React.Fragment>
          <Search />
          <Banner />
        </React.Fragment>
      )}
    </Box>
  );
};

export default NavbarWrapper;
