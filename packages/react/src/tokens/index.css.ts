import { assignVars, layer } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  appCommon,
  appCommonValues,
  appDarkValues,
  appLightValues,
  appTheme,
} from "@/tokens/app/index.css";
import { core, coreValues } from "@/tokens/core/index.css";

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
        [stylesLayer]: { vars: assignVars(appCommon, appCommonValues) },
      },
    },
  ],
  variants: {
    theme: {
      light: {
        "@layer": {
          [stylesLayer]: { vars: assignVars(appTheme, appLightValues) },
        },
      },
      dark: {
        "@layer": {
          [stylesLayer]: { vars: assignVars(appTheme, appDarkValues) },
        },
      },
    },
  },
  defaultVariants: {
    theme: "light",
  },
});
