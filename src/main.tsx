import React from "react";
import ReactDOM from "react-dom/client";
import makeServer from "../server";
import App from "./App";
import "./index.css";

// Create the fake server
makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
