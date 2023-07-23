import colorVariants, { color } from "@/styles/schemas/color.css";
import dimensionProperties, {
  dimension,
  dimensionOptions,
  DimensionProperties,
  DimensionValues,
} from "@/styles/schemas/dimension.css";
import typeVariants, { type } from "@/styles/schemas/typescale.css";

export type { DimensionProperties, DimensionValues };

export default {
  variants: {
    color: colorVariants,
    type: typeVariants,
  },
  properties: {
    dimension: (value: DimensionValues) =>
      dimensionProperties({ dimension: value }),
  },
  options: {
    dimension: dimensionOptions,
  },
  tokens: { color, type, dimension },
};
