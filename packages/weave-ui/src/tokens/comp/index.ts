import { assignVars, createGlobalTheme } from "@vanilla-extract/css";

import { compThemeClassName } from "@/tokens/comp/index.css";

type Tokens = {
  [key: string]: string | Tokens;
};

type Contract = {
  [key: string]: `var(--${string})` | Contract;
};

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type Map<T, V> = T extends object ? { [P in keyof T]: Map<T[P], V> } : V;

export const createCompTheme = <ThemeTokens extends Tokens>(
  tokens: ThemeTokens
) => createGlobalTheme<ThemeTokens>(compThemeClassName, tokens);

export const createCompVariantOverride = <ThemeContract extends Contract>(
  tokens: ThemeContract,
  overrides: DeepPartial<Map<ThemeContract, string>>
) => {
  const theme = createCompTheme(tokens);
  const vars = assignVars(tokens, theme);

  function overrideVars(
    ref: Contract,
    obj: DeepPartial<Map<Contract, string>>
  ) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }

      const referenceVar = ref[key];
      if (typeof value === "object" && typeof referenceVar === "object") {
        return overrideVars(referenceVar, value);
      }

      if (typeof value === "object" || typeof referenceVar === "object") {
        throw Error("Supplied overrides do not match base theme's structure");
      }

      vars[referenceVar] = value;
    });
  }

  overrideVars(theme, overrides);

  return [vars, theme] as const;
};
