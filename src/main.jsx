/* Fonts are served from this site, not from Google, so no visitor data
   leaves for a third party and nothing needs a cookie banner. */
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/karla";

import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio.jsx";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

/* Built pages arrive with their HTML already in place (for Google), so React
   picks it up instead of drawing it again. In development the page is empty. */
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
