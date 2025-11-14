import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-cname",
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, "public", "cname"),
            resolve(__dirname, "dist-github", "CNAME")
          );
          console.log("CNAME file copied successfully");
        } catch (error) {
          console.log("No cname file to copy");
        }
      },
    },
  ],
  base: "/",
  build: {
    outDir: "dist-github",
  },
});
