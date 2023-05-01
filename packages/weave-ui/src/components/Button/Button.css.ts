import { createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { tokens } from "@/tokens/index.css";

export const [primaryStyle, primaryButton] = createTheme({
  color: {
    background: { default: tokens.ref.color.primary },
    text: { default: tokens.ref.color.onPrimary },
  },
});

export const button = recipe({
  base: {
    border: "none",
    height: 32,
    padding: "0 16px",
    borderRadius: 12,
    cursor: "pointer",
    ":disabled": {
      cursor: "default",
    },
  },
  variants: {
    type: {
      primary: [
        primaryStyle,
        {
          background: primaryButton.color.background.default,
          color: primaryButton.color.text.default,
        },
      ],
    },
  },
});
