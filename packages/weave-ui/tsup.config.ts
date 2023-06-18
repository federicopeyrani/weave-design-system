import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import { defineConfig } from "tsup";

const processCss = async (css: string) => {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined,
  });
  return result.css;
};

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  format: ["esm", "cjs"],
  esbuildPlugins: [vanillaExtractPlugin({ processCss })],
});
