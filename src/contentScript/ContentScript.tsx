import React from "react";

import { Storage } from "../popup/utils/ChromeApi";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import ContentScriptApp from "./app";
import { usePatchData } from "../popup/store/patchData";

const checkRender = async () => {
  const patchData = await usePatchData.getData();
  if (!patchData) return;

  render();
};

const render = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<ContentScriptApp />);
};

// chrome.storage.onChanged.addListener((changes) => {
//   if (changes.widgetState) {
//     const newState = changes.widgetState.newValue;
//     if (originState === newState) return;
//     originState = newState;
//     render();
//   }
// });

checkRender();
