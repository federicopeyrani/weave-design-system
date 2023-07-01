import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { contract } from "@/components/Button/variants/base.css";
import { filled, filledButton } from "@/components/Button/variants/filled.css";
import { text, textButton } from "@/components/Button/variants/text.css";
import { tonal, tonalButton } from "@/components/Button/variants/tonal.css";
import { touchRipple } from "@/components/TouchRipple/TouchRipple.css";
import schemas from "@/styles/schemas";
import applyShapeTokens from "@/utils/applyShapeTokens";
import applyTypeTokens from "@/utils/applyTypeTokens";
import color from "@/utils/color";

const container = color();

const label = color();

const outline = color();

export const button = { filledButton, tonalButton, textButton };

export const buttonClassName = recipe({
  base: [
    {
      vars: {
        [container.var]: contract.container.color,
        [container.opacityVar]: contract.container.opacity,
        [label.var]: contract.label.color,
        [label.opacityVar]: contract.label.opacity,
        [outline.var]: contract.focus.outline.color,
        [outline.opacityVar]: "0",
      },
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      background: container.color,
      color: label.color,
      border: "none",
      height: contract.container.height,
      padding: `0 ${contract.container.padding}`,
      cursor: "pointer",
      outline: "none",
      boxShadow: `0 0 0 ${contract.focus.outline.width} ${outline.color}`,
      transition: `background ${contract.transition.duration} ease, 
        box-shadow ${contract.transition.duration} ease`,
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      ":disabled": {
        vars: {
          [container.opacityVar]: contract.disabled.container.opacity,
          [label.opacityVar]: contract.disabled.label.opacity,
        },
        cursor: "default",
      },
      ":focus": {
        vars: {
          [container.var]: contract.focus.container.color,
          [container.opacityVar]: contract.focus.container.opacity,
          [outline.opacityVar]: contract.focus.outline.opacity,
        },
      },
    },
    applyTypeTokens(contract.label),
    applyShapeTokens(contract.container.shape),
  ],
  variants: {
    variant: { filled, tonal, text },
    color: schemas.variants.color,
    type: schemas.variants.type,
  },
  compoundVariants: [
    {
      variants: { variant: "tonal", color: undefined },
      style: schemas.variants.color.secondary,
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    type: "labelMedium",
  },
});

export const touchRippleClassName = style([
  {
    vars: {
      [touchRipple.background.color]: contract.pressed.ripple.color,
      [touchRipple.noise.color]: contract.pressed.ripple.color,
    },
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  },
  applyShapeTokens(contract.container.shape),
]);
