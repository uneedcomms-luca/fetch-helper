import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./main/page";

const PopupRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    route();
  }, []);

  const route = async () => {
    // const accessToken = await Storage.GET("accessToken");
    // if (!accessToken) return navigate("/login");
    // return navigate("/kg-main");
  };
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default PopupRouter;
