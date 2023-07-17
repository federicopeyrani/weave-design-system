import { assignVars, StyleRule } from "@vanilla-extract/css";

import { Tokens } from "@/model/Tokens";
import { stylesLayer } from "@/tokens";
import createTokens from "@/utils/createTokens";

const createTokensTheme = <T extends Tokens>(tokens: T) => {
  const [contract, values] = createTokens(tokens);
  const style = {
    "@layer": {
      [stylesLayer]: {
        vars: assignVars(contract, values as never),
      },
    },
  } satisfies StyleRule;

  return [contract, style] as const;
};

export default createTokensTheme;
