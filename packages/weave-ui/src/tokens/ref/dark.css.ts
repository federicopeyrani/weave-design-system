import { createTheme } from "@vanilla-extract/css";

import { core } from "@/tokens/core/index.css";

import { refLight } from "./light.css";

export const refDarkThemeClassName = createTheme(refLight.color, {
  primary: core.palette.primary40,
  onPrimary: core.palette.primary100,
  primaryContainer: core.palette.primary80,
  onPrimaryContainer: core.palette.primary40,
  neutralContainer: core.palette.neutral80,
  onNeutralContainer: core.palette.neutral40,
  background: core.palette.neutral90,
  onBackground: core.palette.neutral10,
});
