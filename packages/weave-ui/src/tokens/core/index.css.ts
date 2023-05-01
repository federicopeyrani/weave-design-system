import { createTheme } from "@vanilla-extract/css";

import { tonalPalette } from "./color";

export const [coreThemeClassName, core] = createTheme({
  palette: {
    ...tonalPalette("primary", "#7171ab"),
    ...tonalPalette("neutral", "#000000"),
  },
  typography: {},
  dimension: {},
  opacity: {},
});
