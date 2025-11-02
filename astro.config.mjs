import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import transition from "./src/transition.ts";

export default defineConfig({
  site: "https://example.com",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  transitions: {
    name: "global-fade",
    animation: transition,
    fallback: "animate",
  },
});
