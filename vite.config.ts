import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default ({ mode } : { mode: string }) => {
  return defineConfig({
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"), // Entry point
        name: "ShragaUI", // Global variable name for UMD build
        fileName: (format) => `shraga-ui.${format}.js`,
        formats: ["es", "cjs", "umd"] // Build ESM, CommonJS, and UMD versions
      },
      rollupOptions: {
        external: ["react", "react-dom"], // Prevent bundling React
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      }
    },
  plugins: [
    react({
      babel: {
        plugins: [["@babel/plugin-syntax-import-assertions"]], // Ensures correct parsing of "use client"
      },
    }),
    dts({
      insertTypesEntry: true // Generates a `dist/index.d.ts`
    })
  ],
  });
};
