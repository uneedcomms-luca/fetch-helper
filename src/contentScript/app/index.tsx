import React from "react";
import { MemoryRouter } from "react-router-dom";

import "../style/global.css";
import Router from "../router";

const ContentScriptApp = () => {
  return (
    <div className="kg-sidepanel">
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    </div>
  );
};

export default ContentScriptApp;
