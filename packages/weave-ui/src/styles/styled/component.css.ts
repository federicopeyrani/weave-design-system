import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { mapValues } from "lodash";

import breakpoints from "@/styles/conditions/breakpoints.css";
import schemas from "@/styles/schemas";
import { ObjectKeys, SprinkleProps } from "@/utils/Types";

const dimensionValues = {
  auto: "auto",
  full: "100%",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  ...schemas.options.dimension,
};

const flexValues = [0, 1] as const;

export const staticProperties = defineProperties({
  properties: {
    alignSelf: ["auto", "flex-start", "center", "flex-end", "stretch"] as const,
    overflow: ["visible", "hidden", "scroll", "auto"] as const,
    overflowX: ["visible", "hidden", "scroll", "auto"] as const,
    overflowY: ["visible", "hidden", "scroll", "auto"] as const,
    position: ["absolute", "relative", "fixed"] as const,
  },
});

const getDimensionPropertiesValues = <T extends readonly string[]>(
  ...properties: T
) =>
  mapValues(schemas.options.dimension, (value) =>
    properties.reduce(
      (acc, property) => ({ ...acc, [property]: value }),
      {} as { [P in T[number]]: typeof value }
    )
  );

export const responsiveProperties = defineProperties({
  ...breakpoints,
  properties: {
    display: ["none", "flex", "block", "grid", "inline-block"] as const,
    width: { ...dimensionValues, screen: "100vw" },
    height: { ...dimensionValues, screen: "100vh" },
    flexGrow: flexValues,
    flexShrink: flexValues,
    // padding
    p: getDimensionPropertiesValues("padding"),
    pt: getDimensionPropertiesValues("paddingTop"),
    pr: getDimensionPropertiesValues("paddingRight"),
    pb: getDimensionPropertiesValues("paddingBottom"),
    pl: getDimensionPropertiesValues("paddingLeft"),
    px: getDimensionPropertiesValues("paddingLeft", "paddingRight"),
    py: getDimensionPropertiesValues("paddingTop", "paddingBottom"),
    // margin
    m: getDimensionPropertiesValues("margin"),
    mt: getDimensionPropertiesValues("marginTop"),
    mr: getDimensionPropertiesValues("marginRight"),
    mb: getDimensionPropertiesValues("marginBottom"),
    ml: getDimensionPropertiesValues("marginLeft"),
    mx: getDimensionPropertiesValues("marginLeft", "marginRight"),
    my: getDimensionPropertiesValues("marginTop", "marginBottom"),
    // position
    top: getDimensionPropertiesValues("top"),
    right: getDimensionPropertiesValues("right"),
    bottom: getDimensionPropertiesValues("bottom"),
    left: getDimensionPropertiesValues("left"),
  },
});

export const styledComponentProps = [
  ...(Object.keys(staticProperties.styles) as ObjectKeys<
    typeof staticProperties.styles
  >),
  ...(Object.keys(responsiveProperties.styles) as ObjectKeys<
    typeof responsiveProperties.styles
  >),
] as const;

const styledComponentClassName = createSprinkles(
  staticProperties,
  responsiveProperties
);

export type StyledComponent = SprinkleProps<typeof styledComponentClassName>;

export default styledComponentClassName;
