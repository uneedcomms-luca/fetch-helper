import React, { useEffect, useState } from "react";
import BuildScriptPage from "./BuildScript";
import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";

const BuildScript = () => {
  const location = window.location.href;

  const [isMatchedPage, setIsMatchedPage] = useState(false);

  const urlMatch = ["gateway.keepgrow.com/cms/setting/processes", "modify"];

  useEffect(() => {
    setIsMatchedPage(urlMatch.every((url) => location.includes(url)));
  }, []);

  return <>{isMatchedPage ? <BuildScriptPage /> : <NotMatchingPage />}</>;
};

export default BuildScript;
