import { core } from "@/tokens/core/index.css";
import createTokens from "@/utils/createTokens";

import { refTheme } from "./light.css";

export const refDarkValues = createTokens(refTheme.color, {
  primary: core.palette.primary40,
  onPrimary: core.palette.primary100,
  primaryContainer: core.palette.primary80,
  onPrimaryContainer: core.palette.primary40,
  secondary: core.palette.secondary40,
  onSecondary: core.palette.secondary100,
  secondaryContainer: core.palette.secondary80,
  onSecondaryContainer: core.palette.secondary40,
  error: core.palette.error40,
  onError: core.palette.error100,
  errorContainer: core.palette.error80,
  onErrorContainer: core.palette.error40,
  background: core.palette.neutral90,
  onBackground: core.palette.neutral10,
});
