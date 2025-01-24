import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./app/main/page";

const Router = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default Router;
