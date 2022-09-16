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

// Routing
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
);
