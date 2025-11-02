import node from "@astrojs/node";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
