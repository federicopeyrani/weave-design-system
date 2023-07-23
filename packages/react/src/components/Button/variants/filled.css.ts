import { contract, values } from "@/components/Button/variants/base.css";
import schemas from "@/styles/schemas";
import createVariantOverride from "@/utils/createVariantOverride.css";

export const [filled, filledButton] = createVariantOverride(contract, values, {
  container: {
    color: schemas.tokens.color.color,
  },
  label: {
    color: schemas.tokens.color.onColor,
  },
  focus: {
    container: {
      color: schemas.tokens.color.color,
    },
    outline: {
      color: schemas.tokens.color.color,
    },
  },
  pressed: {
    ripple: {
      color: schemas.tokens.color.onColor,
    },
  },
});
