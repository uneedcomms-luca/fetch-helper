import React, { useEffect, useState } from "react";
import MatchingPage2 from "./BuildScript";
import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";

const BuildScript = () => {
  const location = window.location.href;

  const [isMatchedPage, setIsMatchedPage] = useState(false);

  const urlMatch = ["gateway.keepgrow.com/cms/setting/processes", "modify"];

  useEffect(() => {
    setIsMatchedPage(urlMatch.every((url) => location.includes(url)));
  }, []);

  return <>{isMatchedPage ? <MatchingPage2 /> : <NotMatchingPage />}</>;
};

export default BuildScript;
