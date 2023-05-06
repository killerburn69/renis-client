// import React from 'react';
// import logo from './logo.svg';
import { Box } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import ActiveAccount from "./pages/ActiveAccountPage/ActiveAccountPage";
import Home from "./pages/Home/Home";
import NavbarWrapper from "./components/NavbarWrapper";
import { Overlay } from "./components/Overlay";
import IntroducePage from "./pages/IntroducePage/IntroducePage";
import Profile from "./pages/Profiles/Profile";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { pathData } from "./models/variables";
function App() {
  const location = useLocation();
  return (
    <Box position="relative">
      {!pathData.find((path) => path === location.pathname) && (
        <>
          <NavbarWrapper />
          <Overlay />
        </>
      )}
      <Routes>
        <Route path="/" element={<IntroducePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/active" element={<ActiveAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Box>
  );
}

export default App;
