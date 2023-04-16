import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const strictMode = process.env.NODE_ENV === "production";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  (strictMode && (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )) || <App />
);
