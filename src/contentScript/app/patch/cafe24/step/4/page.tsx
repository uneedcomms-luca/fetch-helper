import React, { useEffect, useState } from "react";
import Cafe24LoginPage from "./Login";
import Cafe24MainPage from "./MainPage";
import NotMatchingPage4 from "./NotMatchingPage";
import Cafe24ManagePage from "./Manage";
import Cafe24DesignPage from "./Design";

const Cafe24Step4 = () => {
  const location = window.location.href;

  const [page, setPage] = useState<"login" | "cafe24-main" | "cafe24-manage" | "cafe24-design" | "na">("na");

  const urlCheck = () => {
    if (location.includes("eclogin.cafe24.com/Shop")) {
      setPage("login");
      return;
    }

    if (location.includes("/main/dashboard")) {
      setPage("cafe24-main");
      return;
    }
    if (location.includes("/Manage/Index")) {
      setPage("cafe24-manage");
      return;
    }

    if (location.includes("disp/admin/editor/")) {
      setPage("cafe24-design");
      return;
    }

    setPage("na");
  };

  useEffect(() => {
    urlCheck();
  }, []);

  return (
    <>
      {page === "login" && <Cafe24LoginPage />}
      {page === "cafe24-main" && <Cafe24MainPage />}
      {page === "cafe24-manage" && <Cafe24ManagePage />}
      {page === "cafe24-design" && <Cafe24DesignPage />}
      {page === "na" && <NotMatchingPage4 />}
    </>
  );
};

export default Cafe24Step4;
