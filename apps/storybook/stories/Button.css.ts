import { style } from "@vanilla-extract/css";
import { tokens } from "weave-ui/src";

export const customFilled = style({
  vars: {
    [tokens.comp.filledButton.container.color]: "255 0 0",
    [tokens.comp.filledButton.label.color]: "0 0 255",
    [tokens.comp.filledButton.label.weight]: "800",
  },
});
