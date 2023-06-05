import { recipe } from "@vanilla-extract/recipes";

import tokens, { schemas } from "@/tokens";
import applyShapeTokens from "@/utils/applyShapeTokens";
import applyTypeTokens from "@/utils/applyTypeTokens";
import color from "@/utils/color";
import createTokens from "@/utils/createTokens";
import createVariantOverride from "@/utils/createVariantOverride.css";

const container = color();

const label = color();

const outline = color();

const [contract, model] = createTokens({
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
  pressed: {},
});

const [filled, filledButton] = createVariantOverride(contract, model, {
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
});

const [tonal, tonalButton] = createVariantOverride(contract, model, {
  container: {
    color: schemas.tokens.color.colorContainer,
  },
  label: {
    color: schemas.tokens.color.color,
  },
  focus: {
    outline: {
      color: schemas.tokens.color.color,
    },
  },
});

const [text, textButton] = createVariantOverride(contract, model, {
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
});

export const button = { filledButton, tonalButton, textButton };

export const buttonClassName = recipe({
  base: [
    {
      vars: {
        [container.var]: contract.container.color,
        [container.opacity]: contract.container.opacity,
        [label.var]: contract.label.color,
        [label.opacity]: contract.label.opacity,
        [outline.var]: contract.focus.outline.color,
        [outline.opacity]: contract.focus.outline.opacity,
      },
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
          [container.opacity]: contract.disabled.container.opacity,
          [label.opacity]: contract.disabled.label.opacity,
        },
        cursor: "default",
      },
      ":focus": {
        vars: {
          [outline.var]: contract.focus.outline.color,
          [outline.opacity]: contract.focus.outline.opacity,
        },
        outlineWidth: contract.focus.outline.width,
      },
    },
    applyTypeTokens(contract.label),
    applyShapeTokens(contract.container.shape),
  ],
  variants: {
    state: {
      pressed: {},
    },
    variant: {
      filled: [filled, schemas.variants.color.primary],
      tonal: [tonal, schemas.variants.color.secondary],
      text: [text, schemas.variants.color.primary],
    },
    color: schemas.variants.color,
    type: schemas.variants.type,
  },
  defaultVariants: {
    variant: "filled",
    type: "labelMedium",
  },
});
