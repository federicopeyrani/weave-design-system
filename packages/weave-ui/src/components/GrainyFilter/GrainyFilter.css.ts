import { style } from "@vanilla-extract/css";

import color from "@/utils/color";
import createTokensTheme from "@/utils/createTokensTheme";

const [contract, theme] = createTokensTheme({
  color: "0 0 0",
  opacity: "1",
});

export const { color: floodColor } = color({
  color: contract.color,
  opacity: 1,
});

export const grainyFilter = contract;

export const grainyFilterClassName = style([
  theme,
  { opacity: contract.opacity },
]);
