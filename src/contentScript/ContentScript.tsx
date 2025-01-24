import React from "react";

import { Storage } from "../popup/utils/ChromeApi";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

const render = async () => {
  // const container = document.createElement("div");
  // document.body.appendChild(container);
  // const root = createRoot(container);
  // root.render(<App />);
};

// chrome.storage.onChanged.addListener((changes) => {
//   if (changes.widgetState) {
//     const newState = changes.widgetState.newValue;
//     if (originState === newState) return;
//     originState = newState;
//     render();
//   }
// });

const App = () => {
  return (
    <Wrapper>
      <h1>HI</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
`;

render();
