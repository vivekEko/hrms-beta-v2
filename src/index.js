// React
import React from "react";
// Routing
import ReactDOM from "react-dom/client";
// State management (Recoil JS)
import { RecoilRoot } from "recoil";
// CSS
import "./index.css";
// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
