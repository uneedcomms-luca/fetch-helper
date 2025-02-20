import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import "../style/global.css";
import "../style/reset.css";
import Router from "./router";
import { SidepanelService } from "../utils/sidepanel";

const ContentScriptApp = () => {
  return (
    <div className="kg-sidepanel">
      {/* <div className="kg-close-button" onClick={() => SidepanelService.togglePanel()}>
        𝘅
      </div> */}
      <div className="kg-sidepanel-content">
        <MemoryRouter initialEntries={["/"]}>
          <Router />
        </MemoryRouter>
      </div>
    </div>
  );
};

export default ContentScriptApp;
