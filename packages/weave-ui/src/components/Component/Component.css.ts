import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import breakpoints from "@/styles/conditions/breakpoints.css";
import { SprinkleProps } from "@/utils/Types";

const dimensionValues = {
  auto: "auto",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
};

const flexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

const responsiveProperties = defineProperties({
  ...breakpoints,
  properties: {
    display: ["none", "flex", "block", "grid", "inline-block"] as const,
    width: dimensionValues,
    height: dimensionValues,
    flexGrow: flexValues,
    flexShrink: flexValues,
    alignSelf: ["auto", "flex-start", "center", "flex-end", "stretch"] as const,
  },
});

export const componentProperties = createSprinkles(responsiveProperties);

export type ComponentProperties = SprinkleProps<typeof componentProperties>;
