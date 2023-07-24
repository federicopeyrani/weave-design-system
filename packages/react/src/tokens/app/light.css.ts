import { ref } from "@/tokens/ref/index.css";
import createTokens from "@/utils/createTokens";

export const [appTheme, appLightValues] = createTokens({
  color: {
    primary: ref.palette.primary40,
    onPrimary: ref.palette.primary100,
    primaryContainer: ref.palette.primary90,
    onPrimaryContainer: ref.palette.primary40,
    secondary: ref.palette.secondary40,
    onSecondary: ref.palette.secondary100,
    secondaryContainer: ref.palette.secondary90,
    onSecondaryContainer: ref.palette.secondary40,
    error: ref.palette.error40,
    onError: ref.palette.error100,
    errorContainer: ref.palette.error90,
    onErrorContainer: ref.palette.error40,
    background: ref.palette.neutral90,
    onBackground: ref.palette.neutral10,
  },
});
