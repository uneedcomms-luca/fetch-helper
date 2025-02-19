import React, { useEffect, useState } from "react";
import MatchingPage2 from "./page";
import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";

const Cafe24Step2 = () => {
  const location = window.location.href;

  const [isMatchedPage, setIsMatchedPage] = useState(false);

  const urlMatch = ["gateway.keepgrow.com/cms/setting/processes", "modify"];

  useEffect(() => {
    setIsMatchedPage(urlMatch.every((url) => location.includes(url)));
  }, []);

  return <>{isMatchedPage ? <MatchingPage2 /> : <NotMatchingPage />}</>;
};

export default Cafe24Step2;
