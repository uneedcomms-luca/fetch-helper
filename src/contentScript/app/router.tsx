import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "./main/page";
import { usePatchData } from "../../popup/store/patchData";
import PatchCafe24Page from "./patch/cafe24/page";

const Router = () => {
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    route();
  }, []);

  const route = async () => {
    const patchData = await usePatchData.getData();
    if (patchData) {
      return navigate(`/patch/${patchData.hosting}/${Number(patchData.step || 1)}`);
    }

    return navigate("/main");
  };

  return (
    <>
      {location.pathname}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/patch/cafe24/:step" element={<PatchCafe24Page />} />
      </Routes>
    </>
  );
};

export default Router;
