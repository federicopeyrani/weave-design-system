import { createTheme } from "@vanilla-extract/css";

import { scale } from "@/tokens/core/dimension";
import { typescale } from "@/tokens/core/typescale";

import { tonalPalette } from "./color";

export const [coreThemeClassName, core] = createTheme({
  palette: {
    ...tonalPalette("primary", "#7171ab"),
    ...tonalPalette("secondary", "#908ea5"),
    ...tonalPalette("neutral", "#000000"),
  },
  type: {
    weightNormal: "400",
    weightMedium: "500",
    ...typescale("scale", 16, 1.125),
  },
  grid: {
    ...scale("small", 4),
    ...scale("regular", 8),
  },
  opacity: {
    def: "12",
  },
});
