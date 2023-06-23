import { createVar } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { chain, mapValues } from "lodash";

import breakpoints from "@/styles/conditions/breakpoints.css";
import { GridSize } from "@/tokens";
import { core } from "@/tokens/core/index.css";
import { SprinkleProps, ValuesOf } from "@/utils/Types";

type CoreGrid = typeof core.grid;

export const dimension = createVar();

export const dimensionOptions = chain(core.grid)
  .pickBy((value, key) => key.startsWith("regular"))
  .mapKeys((value, key) => +key.replace("regular", ""))
  .value() as {
  [key in GridSize]: ValuesOf<CoreGrid>;
};

const dimensionValues = mapValues(
  { ...dimensionOptions, unset: "unset" },
  (value) => ({
    vars: { [dimension]: value },
  })
);

const properties = defineProperties({
  ...breakpoints,
  properties: {
    dimension: dimensionValues,
  },
});

const sprinkles = createSprinkles(properties);

export type DimensionProperties = SprinkleProps<typeof sprinkles>;

export type DimensionValues = DimensionProperties["dimension"];

export default sprinkles;
