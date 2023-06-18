import { contract, values } from "@/components/Button/variants/base.css";
import { schemas } from "@/tokens";
import createVariantOverride from "@/utils/createVariantOverride.css";

export const [tonal, tonalButton] = createVariantOverride(contract, values, {
  container: {
    color: schemas.tokens.color.colorContainer,
  },
  label: {
    color: schemas.tokens.color.onColorContainer,
  },
  focus: {
    container: {
      color: schemas.tokens.color.colorContainer,
    },
    outline: {
      color: schemas.tokens.color.color,
    },
  },
  pressed: {
    ripple: {
      color: schemas.tokens.color.onColorContainer,
    },
  },
});
