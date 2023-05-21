import { recipe } from "@vanilla-extract/recipes";

import tokens, { createCompTheme, createCompVariantOverride } from "@/tokens";
import applyShapeTokens from "@/utils/applyShapeTokens";
import applyTypeTokens from "@/utils/applyTypeTokens";
import color from "@/utils/color";

const container = color();

const label = color();

const outline = color();

const contract = createCompTheme({
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
    ...tokens.ref.type.labelMedium,
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
      color: "none",
      opacity: "0.24",
      width: "4px",
    },
  },
});

const [primaryVars, primaryButton] = createCompVariantOverride(contract, {
  container: {
    color: tokens.ref.color.primary,
  },
  label: {
    color: tokens.ref.color.onPrimary,
  },
  focus: {
    outline: {
      color: tokens.ref.color.primary,
    },
  },
});

export default { primaryButton };

export const buttonClassName = recipe({
  base: {
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
    ...applyTypeTokens(contract.label),
    ...applyShapeTokens(contract.container.shape),
    ":disabled": {
      cursor: "default",
    },
  },
  variants: {
    type: {
      primary: { vars: primaryVars },
      tonal: {},
      text: {},
    },
  },
});
