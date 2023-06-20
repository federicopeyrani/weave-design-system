import { style } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import breakpoints from "@/styles/conditions/breakpoints.css";
import { SprinkleProps } from "@/utils/Types";

export const properties = defineProperties({
  ...breakpoints,
  properties: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" },
    },
  },
});

export const linearClassName = style({
  display: "flex",
});

export const linearProperties = createSprinkles(properties);

export type LinearProperties = SprinkleProps<typeof linearProperties>;
