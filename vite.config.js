import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages under a repo name (not username.github.io),
  // uncomment the line below and set it to "/repo-name/".
  // base: "/andreja-portfolio/",
});
