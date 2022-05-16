import React from "react";
import ReactDOM from "react-dom/client";
import makeServer from "../server";
import App from "./App";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
