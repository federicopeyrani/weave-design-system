import { assignVars } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import schemas from "@/styles/schemas";
import applyTypeTokens from "@/utils/applyTypeTokens";
import color from "@/utils/color";
import createTokens from "@/utils/createTokens";

export const [type, typeValues] = createTokens({
  text: {
    color: schemas.tokens.color.color,
    opacity: "1",
    ...schemas.tokens.type,
  },
});

const textColor = color({
  color: type.text.color,
  opacity: type.text.opacity,
});

export const typeClassName = recipe({
  base: [
    {
      vars: assignVars(type, typeValues),
      color: textColor.color,
    },
    applyTypeTokens(type.text),
  ],
  variants: {
    color: schemas.variants.color,
    type: schemas.variants.type,
  },
  defaultVariants: {
    type: "displayMedium",
  },
});
