import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import PracticeAreas from "./pages/PracticeAreas";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*<Route path="/signin" element={<SignIn />} />*/}
        {/*<Route path="/signup" element={<SignUp />} />*/}
        {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
        <Route path="/profile" element={<Profile />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
