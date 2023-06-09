import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { touchRipple } from "@/components/TouchRipple/TouchRipple.css";
import tokens, { schemas } from "@/tokens";
import applyShapeTokens from "@/utils/applyShapeTokens";
import applyTypeTokens from "@/utils/applyTypeTokens";
import color from "@/utils/color";
import createTokens from "@/utils/createTokens";
import createVariantOverride from "@/utils/createVariantOverride.css";

const [contract, values] = createTokens({
  container: {
    color: "255 255 255",
    opacity: "1",
    height: tokens.core.grid.regular5,
    shape: tokens.ref.shape.rounded,
    padding: tokens.core.grid.regular2,
  },
  label: {
    color: "255 255 255",
    opacity: "1",
    ...schemas.tokens.type,
  },
  transition: {
    duration: tokens.ref.motion.durationShort2,
  },
  disabled: {
    container: {
      opacity: "0.12",
    },
    label: {
      opacity: "0.38",
    },
  },
  focus: {
    outline: {
      color: "255 255 255",
      opacity: "0.24",
      width: "4px",
    },
  },
  pressed: {
    ripple: {
      color: "none",
    },
  },
});

const container = color();

const label = color();

const outline = color();

const [filled, filledButton] = createVariantOverride(contract, values, {
  container: {
    color: schemas.tokens.color.color,
  },
  label: {
    color: schemas.tokens.color.onColor,
  },
  focus: {
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

const [tonal, tonalButton] = createVariantOverride(contract, values, {
  container: {
    color: schemas.tokens.color.colorContainer,
  },
  label: {
    color: schemas.tokens.color.onColorContainer,
  },
  focus: {
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

const [text, textButton] = createVariantOverride(contract, values, {
  container: {
    opacity: "0",
  },
  label: {
    color: schemas.tokens.color.color,
  },
  focus: {
    outline: {
      color: schemas.tokens.color.color,
    },
  },
  pressed: {
    ripple: {
      color: schemas.tokens.color.color,
    },
  },
});

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
        [outline.opacityVar]: contract.focus.outline.opacity,
      },
      position: "relative",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      background: container.color,
      color: label.color,
      border: "none",
      height: contract.container.height,
      padding: `0 ${contract.container.padding}`,
      cursor: "pointer",
      outline: `0 solid ${outline.color}`,
      transition: `outline-width ${contract.transition.duration} ease`,
      ":disabled": {
        vars: {
          [container.opacityVar]: contract.disabled.container.opacity,
          [label.opacityVar]: contract.disabled.label.opacity,
        },
        cursor: "default",
      },
      ":focus": {
        vars: {
          [outline.var]: contract.focus.outline.color,
          [outline.opacityVar]: contract.focus.outline.opacity,
        },
        outlineWidth: contract.focus.outline.width,
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

export const touchRippleClassName = style({
  vars: {
    [touchRipple.background.color]: contract.pressed.ripple.color,
    [touchRipple.noise.color]: contract.pressed.ripple.color,
  },
});
