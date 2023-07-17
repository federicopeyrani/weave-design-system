import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { variants } from "@/components/Layout/Linear/Linear.css";
import breakpoints from "@/styles/conditions/breakpoints.css";
import { SprinkleProps } from "@/utils/Types";

const responsiveProperties = defineProperties({
  ...breakpoints,
  properties: variants,
});

const styledFlexClassName = createSprinkles(responsiveProperties);

export type StyledFlex = SprinkleProps<typeof styledFlexClassName>;

export default styledFlexClassName;
