import { createGlobalTheme } from "@vanilla-extract/css";

import { refLight } from "@/tokens/ref/light.css";

createGlobalTheme(".weave-dark", refLight, {
  color: { primary: "blue" },
});
