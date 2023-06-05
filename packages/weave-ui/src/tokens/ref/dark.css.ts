import { core } from "@/tokens/core/index.css";
import createTokens from "@/utils/createTokens";

import { refTheme } from "./light.css";

export const refDarkValues = createTokens(refTheme.color, {
  primary: core.palette.primary40,
  onPrimary: core.palette.primary100,
  primaryContainer: core.palette.primary80,
  secondary: core.palette.secondary40,
  onSecondary: core.palette.secondary100,
  secondaryContainer: core.palette.secondary80,
  background: core.palette.neutral90,
  onBackground: core.palette.neutral10,
});
