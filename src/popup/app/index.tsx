import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import PopupRouter from "./router";
import "../style/global.css";

const App = () => {
  return (
    <MemoryRouter initialEntries={["/main"]}>
      <PopupRouter />
    </MemoryRouter>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(<App />);
