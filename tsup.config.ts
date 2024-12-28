//tsup.config.ts
import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true, // Generates declaration files
  sourcemap: true, // Generate source maps for debugging
  clean: true, // Clean the dist folder before building
  external: ['styled-components'], // Exclude styled-components from the bundle
});