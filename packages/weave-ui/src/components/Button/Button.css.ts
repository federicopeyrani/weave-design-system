import { createGlobalTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { prefixClassName } from "@/config";
import { tokens } from "@/tokens/index.css";

const className = `${prefixClassName}-button`;

export const buttonTokens = createGlobalTheme(`.${className}`, {
  button: {
    primary: {
      color: {
        background: { default: tokens.ref.color.primary },
      },
    },
  },
});

export const button = recipe({
  base: className,
  variants: {
    type: {
      primary: {
        background: buttonTokens.button.primary.color.background.default,
      },
    },
  },
});
