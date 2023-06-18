import { contract, values } from "@/components/Button/variants/base.css";
import { schemas } from "@/tokens";
import createVariantOverride from "@/utils/createVariantOverride.css";

export const [text, textButton] = createVariantOverride(contract, values, {
  container: {
    opacity: "0",
  },
  label: {
    color: schemas.tokens.color.color,
  },
  focus: {
    container: {
      color: schemas.tokens.color.color,
      opacity: "0.12",
    },
    outline: {
      width: "0",
      opacity: "0",
    },
  },
  pressed: {
    ripple: {
      color: schemas.tokens.color.color,
    },
  },
});
