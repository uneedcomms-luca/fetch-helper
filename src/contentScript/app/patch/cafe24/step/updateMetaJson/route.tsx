import React, { useEffect, useState } from "react";
import MatchingPage from "./UpdateMetaJson";
import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";

const UpdateMetaJson = () => {
  const location = window.location.href;

  const [isMatchedPage, setIsMatchedPage] = useState(false);

  const urlMatch = ["gateway.keepgrow.com/cms/setting/processes", "modify"];

  useEffect(() => {
    setIsMatchedPage(urlMatch.every((url) => location.includes(url)));
  }, []);

  return <>{isMatchedPage ? <MatchingPage /> : <NotMatchingPage />}</>;
};

export default UpdateMetaJson;
