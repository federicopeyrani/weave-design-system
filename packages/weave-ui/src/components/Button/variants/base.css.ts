import tokens, { schemas } from "@/tokens";
import createTokens from "@/utils/createTokens";

export const [contract, values] = createTokens({
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
    container: {
      color: "255 255 255",
      opacity: "1",
    },
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
