import React, { useEffect, useState } from "react";
import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";
import CheckHostingPage from "./CheckHosting";
import Cafe24LoginPage from "../../../../../components/patch/cafe24/Login";
import Cafe24Home from "./Cafe24Home";

const MoveHosting = () => {
  const location = window.location.href;

  const urlMatch = ["gateway.keepgrow.com/cms/setting/processes", "modify"];

  const [page, setPage] = useState<"login" | "cafe24" | "cms-modify" | "na">("na");

  const urlCheck = () => {
    if (location.includes("eclogin.cafe24.com/Shop")) {
      setPage("login");
      return;
    }
    if (location.includes("cafe24.com")) {
      setPage("cafe24");
      return;
    }

    if (urlMatch.every((url) => location.includes(url))) {
      setPage("cms-modify");
      return;
    }

    setPage("na");
  };

  useEffect(() => {
    urlCheck();
  }, []);

  return (
    <>
      {page === "cms-modify" && <CheckHostingPage />}
      {page === "login" && <Cafe24LoginPage />}
      {page === "cafe24" && <Cafe24Home />}
      {page === "na" && <NotMatchingPage />}
    </>
  );
};

export default MoveHosting;
