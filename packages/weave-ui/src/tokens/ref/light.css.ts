import { core } from "@/tokens/core/index.css";
import createTokens from "@/utils/createTokens";

export const [refTheme, refLightValues] = createTokens({
  color: {
    primary: core.palette.primary40,
    onPrimary: core.palette.primary100,
    primaryContainer: core.palette.primary90,
    secondary: core.palette.secondary40,
    onSecondary: core.palette.secondary100,
    secondaryContainer: core.palette.secondary90,
    background: core.palette.neutral90,
    onBackground: core.palette.neutral10,
  },
});
