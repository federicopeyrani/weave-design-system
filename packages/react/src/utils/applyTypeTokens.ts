import type { StyleRule } from "@vanilla-extract/css";

import type tokens from "@/tokens";
import type { ValuesOf } from "@/utils/Types";

export type TypeTokens = ValuesOf<typeof tokens.app.type>;

const applyTypeTokens = ({ size, weight, font }: TypeTokens): StyleRule => ({
  fontSize: size,
  fontWeight: weight,
  fontFamily: font,
});

export default applyTypeTokens;
