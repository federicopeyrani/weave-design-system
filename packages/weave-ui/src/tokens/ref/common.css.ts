import { createTheme } from "@vanilla-extract/css";

import { core } from "@/tokens/core/index.css";
import { duration } from "@/tokens/ref/motion";

export const [refCommonThemeClassName, refCommon] = createTheme({
  shape: {
    rounded: {
      startStart: core.grid.small3,
      startEnd: core.grid.small3,
      endEnd: core.grid.small3,
      endStart: core.grid.small3,
    },
  },
  type: {
    labelMedium: {
      size: core.type.scale0,
      weight: core.type.weightMedium,
    },
  },
  motion: duration(
    "duration",
    ["Short", "Medium", "Long", "ExtraLong"] as const,
    ["1", "2", "3", "4"] as const,
    50
  ),
});
