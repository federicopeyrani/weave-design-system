import { createThemeContract } from "@vanilla-extract/css";

import { CSSVariable } from "@/model/CSSVariable";
import { ContractOf, Tokens } from "@/model/Tokens";
import { MapLeaves } from "@/utils/Types";

export default function createTokens<T extends Tokens>(
  tokens: T
): readonly [MapLeaves<T, CSSVariable>, T];

export default function createTokens<T extends Tokens>(
  contract: ContractOf<T>,
  tokens: T
): T;

export default function createTokens<T extends Tokens>(
  arg0: ContractOf<T> | T,
  arg1?: T
) {
  if (arg1 !== undefined) {
    return arg1;
  }

  const tokensContract = createThemeContract(arg0);
  return [tokensContract, arg0];
}
