import type { StyleRule } from "@vanilla-extract/css";

import type tokens from "@/tokens";
import { ValuesOf } from "@/utils/type";

export type TypeTokens = ValuesOf<typeof tokens.ref.type>;

const applyTypeTokens = ({ size, weight }: TypeTokens): StyleRule => ({
  fontSize: size,
  fontWeight: weight,
});

export default applyTypeTokens;
