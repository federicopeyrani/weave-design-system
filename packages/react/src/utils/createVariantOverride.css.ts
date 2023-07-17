import { assignVars, createThemeContract, style } from "@vanilla-extract/css";

import { ContractOf, Tokens } from "@/model/Tokens";
import { stylesLayer } from "@/tokens";
import deepMerge from "@/utils/deepMerge";
import { DeepPartial } from "@/utils/Types";

const createVariantOverride = <T extends Tokens>(
  contract: ContractOf<T>,
  defaultTokens: T,
  overrides: DeepPartial<T>
) => {
  const mergedTokens = deepMerge(defaultTokens, overrides);
  const theme = createThemeContract(mergedTokens);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const overrideVars = assignVars(contract, theme);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const themeVars = assignVars(theme, mergedTokens);

  const styles = style([
    { vars: overrideVars },
    {
      "@layer": {
        [stylesLayer]: { vars: themeVars },
      },
    },
  ]);

  return [styles, theme] as const;
};

export default createVariantOverride;
