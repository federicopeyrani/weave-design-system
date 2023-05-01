import { createGlobalTheme } from "@vanilla-extract/css";

import { core } from "@/tokens/core/index.css";

export const refLight = createGlobalTheme(".weave-light", {
  color: {
    primary: core.color.primary["primary-40"],
  },
});
