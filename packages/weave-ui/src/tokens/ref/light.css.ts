import { createTheme } from "@vanilla-extract/css";

import { core } from "@/tokens/core/index.css";

export const [refLightThemeClassName, refLight] = createTheme({
  color: {
    primary: core.palette.primary40,
    onPrimary: core.palette.primary100,
    primaryContainer: core.palette.primary90,
    onPrimaryContainer: core.palette.primary40,
    neutralContainer: core.palette.neutral90,
    onNeutralContainer: core.palette.neutral40,
    background: core.palette.neutral90,
    onBackground: core.palette.neutral10,
  },
});
