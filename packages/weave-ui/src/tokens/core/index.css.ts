import { scale } from "@/tokens/core/dimension";
import { typescale } from "@/tokens/core/typescale";
import createTokens from "@/utils/createTokens";

import { tonalPalette } from "./color";

export const [core, coreValues] = createTokens({
  palette: {
    ...tonalPalette("primary", "#7171ab"),
    ...tonalPalette("secondary", "#908ea5"),
    ...tonalPalette("neutral", "#000000"),
    ...tonalPalette("error", "#c72907"),
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
