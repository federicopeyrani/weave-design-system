import { createGlobalTheme } from "@vanilla-extract/css";

export const core = createGlobalTheme(".weave-core", {
  color: {
    primary: {
      "primary-40": "red",
    },
  },
  typography: {},
  dimension: {},
  opacity: {},
});
