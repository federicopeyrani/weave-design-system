import type { StyleRule } from "@vanilla-extract/css";

import type tokens from "@/tokens";
import { ValuesOf } from "@/utils/Types";

export type ShapeTokens = ValuesOf<typeof tokens.app.shape>;

const applyShapeTokens = ({
  startStart,
  startEnd,
  endEnd,
  endStart,
}: ShapeTokens): StyleRule => ({
  borderStartStartRadius: startStart,
  borderStartEndRadius: startEnd,
  borderEndEndRadius: endEnd,
  borderEndStartRadius: endStart,
});

export default applyShapeTokens;
