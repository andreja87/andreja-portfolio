/* Fonts are served from this site, not from Google, so no visitor data
   leaves for a third party and nothing needs a cookie banner. */
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/karla";

import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
