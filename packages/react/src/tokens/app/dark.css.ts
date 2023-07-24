import { ref } from "@/tokens/ref/index.css";
import createTokens from "@/utils/createTokens";

import { appTheme } from "./light.css";

export const appDarkValues = createTokens(appTheme, {
  color: {
    primary: ref.palette.primary40,
    onPrimary: ref.palette.primary100,
    primaryContainer: ref.palette.primary80,
    onPrimaryContainer: ref.palette.primary40,
    secondary: ref.palette.secondary40,
    onSecondary: ref.palette.secondary100,
    secondaryContainer: ref.palette.secondary80,
    onSecondaryContainer: ref.palette.secondary40,
    error: ref.palette.error40,
    onError: ref.palette.error100,
    errorContainer: ref.palette.error80,
    onErrorContainer: ref.palette.error40,
    background: ref.palette.neutral90,
    onBackground: ref.palette.neutral10,
  },
});
