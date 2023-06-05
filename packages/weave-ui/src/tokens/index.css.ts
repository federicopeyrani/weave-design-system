import { assignVars, layer } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { core, coreValues } from "@/tokens/core/index.css";
import {
  refCommon,
  refCommonValues,
  refLightValues,
  refTheme,
} from "@/tokens/ref/index.css";

export const stylesLayer = layer();

export const styles = recipe({
  base: [
    {
      "@layer": {
        [stylesLayer]: { vars: assignVars(core, coreValues) },
      },
    },
    {
      "@layer": {
        [stylesLayer]: { vars: assignVars(refCommon, refCommonValues) },
      },
    },
  ],
  variants: {
    theme: {
      light: {
        "@layer": {
          [stylesLayer]: { vars: assignVars(refTheme, refLightValues) },
        },
      },
      dark: {
        "@layer": {
          [stylesLayer]: { vars: assignVars(refTheme, refLightValues) },
        },
      },
    },
  },
  defaultVariants: {
    theme: "light",
  },
});
