import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // or whatever CSS you're using

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Only place with <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
