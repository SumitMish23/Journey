import { defineConfig } from "vite";
import { NodePackageImporter } from "sass";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/variables.scss" as *;`,
      },
    },
  },
});
