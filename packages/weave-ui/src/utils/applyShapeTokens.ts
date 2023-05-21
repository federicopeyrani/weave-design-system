import type { StyleRule } from "@vanilla-extract/css";

import type tokens from "@/tokens";
import { ValuesOf } from "@/utils/type";

export type ShapeTokens = ValuesOf<typeof tokens.ref.shape>;

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
