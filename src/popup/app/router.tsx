import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Storage } from "../utils/ChromeApi";
import { JwtUtil } from "../utils/JwtUtil";
import PopupLoadingPage from "./loading/page";
import PopupLoginPage from "./login/page";
import PopupMainPage from "./main/page";
import PatchSelectPage from "./patch/page";
import PatchPage from "./patch/[hosting]/page";
import { usePatchData } from "../store/patchData";

const PopupRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    route();
  }, []);
  const { getPatchData } = usePatchData();

  const route = async () => {
    // const jwtUtil = new JwtUtil();
    // const accessToken = await Storage.GET("accessToken");
    // if (!accessToken) {
    //   return navigate("/login");
    // }

    // if (jwtUtil.hasAgencyRole(accessToken)) {return navigate("/agency-main");}

    const patchData = await getPatchData();
    if (patchData) {
      return navigate(`/patch/${patchData.hosting}`);
    }

    return navigate("/main");
  };
  return (
    <Routes>
      <Route path="/" element={<PopupLoadingPage />} />
      <Route path="/login" element={<PopupLoginPage />} />
      <Route path="/main" element={<PopupMainPage />} />
      <Route path="/patch" element={<PatchSelectPage />} />
      <Route path="/patch/:hosting" element={<PatchPage />} />
    </Routes>
  );
};

export default PopupRouter;
