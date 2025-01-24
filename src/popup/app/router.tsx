import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./main/page";
import { Storage } from "../utils/ChromeApi";
import { JwtUtil } from "../utils/JwtUtil";
import PopupLoadingPage from "./loading/page";
import PopupLoginPage from "./login/page";

const PopupRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // route();
  }, []);

  const route = async () => {
    const jwtUtil = new JwtUtil();
    const accessToken = await Storage.GET("accessToken");
    if (!accessToken) {
      return navigate("/login");
    }
    if (jwtUtil.hasAgencyRole(accessToken)) {
      return navigate("/agency-main");
    }
    return navigate("/kg-main");
  };
  return (
    <Routes>
      <Route path="/" element={<PopupLoadingPage />} />
      <Route path="/login" element={<PopupLoginPage />} />
    </Routes>
  );
};

export default PopupRouter;
