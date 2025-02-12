import React, { useEffect, useState } from "react";

import NotMatchingPage from "../../../../../components/patch/NotMatchingPage";
import MatchingPage3 from "./MatchingPage";

const Cafe24Step3 = () => {
  const location = window.location.href;

  const [isMatchedPage, setIsMatchedPage] = useState(false);

  const urlMatch = "gateway.keepgrow.com/cms/setting/processes";

  const checkUrl = () => {
    if (location.includes(urlMatch)) {
      if (location.includes("modify")) {
        setIsMatchedPage(false);
        return;
      }
      setIsMatchedPage(true);
    }
  };

  useEffect(() => {
    checkUrl();
  }, []);

  return <>{isMatchedPage ? <MatchingPage3 /> : <NotMatchingPage step={3} />}</>;
};

export default Cafe24Step3;
