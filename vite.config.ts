/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 将根路径换成相对路径
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
});
