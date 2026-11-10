/* Used only while building: renders each page to HTML so Google gets the
   full text without running JavaScript. See scripts/prerender.mjs. */
import { renderToString } from "react-dom/server";
import Portfolio from "./Portfolio.jsx";
export { routes, SITE_URL, SITE_NAME } from "./seo.js";

export function render(path) {
  return renderToString(<Portfolio initialPath={path} />);
}
