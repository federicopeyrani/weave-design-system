import { style } from "@vanilla-extract/css";
import { theme } from "weave-ui/src";

export const customPrimary = style({
  vars: {
    [theme.comp.primaryButton.container.color]: "255 0 0",
    [theme.comp.primaryButton.label.color]: "0 0 255",
    [theme.comp.primaryButton.label.weight]: "800",
  },
});
