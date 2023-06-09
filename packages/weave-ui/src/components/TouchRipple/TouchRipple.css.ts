import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { grainyFilter } from "@/components/GrainyFilter/GrainyFilter.css";
import tokens from "@/tokens";
import color from "@/utils/color";
import createTokensTheme from "@/utils/createTokensTheme";

const [contract, theme] = createTokensTheme({
  width: "800px",
  x: "0px",
  y: "0px",
  background: {
    color: tokens.core.palette.neutral95,
    opacity: "0.4",
  },
  noise: {
    color: tokens.core.palette.neutral10,
    opacity: "0.2",
  },
});

export const touchRipple = contract;

const background = color(contract.background);

const expand = keyframes({
  "0%": { width: "0" },
  "100%": { width: touchRipple.width },
});

const fadeInOut = keyframes({
  "0%": { opacity: "0" },
  "20%": { opacity: "1" },
  "100%": { opacity: "0" },
});

export const touchRippleClassName = recipe({
  base: [
    theme,
    {
      position: "absolute",
      overflow: "hidden",
      pointerEvents: "none",
      background: background.color,
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      width: touchRipple.width,
      aspectRatio: "1 / 1",
      left: touchRipple.x,
      top: touchRipple.y,
      transition: "background 1s ease-out",
    },
  ],
  variants: {
    state: {
      active: {
        animation: `${expand} 2.8s ease-out forwards, ${fadeInOut} 0.6s ease-out forwards`,
      },
    },
  },
});

export const noiseClassName = style({
  vars: {
    [grainyFilter.color]: contract.noise.color,
    [grainyFilter.opacity]: contract.noise.opacity,
  },
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});
