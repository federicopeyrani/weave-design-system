import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { grainyFilter } from "@/components/GrainyFilter/GrainyFilter.css";
import tokens from "@/tokens";
import color from "@/utils/color";
import createTokensTheme from "@/utils/createTokensTheme";

const maxRippleSize = 800;

const [contract, theme] = createTokensTheme({
  x: "0px",
  y: "0px",
  background: {
    color: tokens.ref.palette.neutral95,
    opacity: "0.4",
  },
  noise: {
    color: tokens.ref.palette.neutral10,
    opacity: "0.2",
  },
});

export const touchRipple = contract;

const background = color(contract.background);

const expand = keyframes({
  "0%": { width: "0" },
  "100%": { width: `${maxRippleSize}px` },
});

const fadeInOut = keyframes({
  "0%": { opacity: "0" },
  "20%": { opacity: "1" },
  "100%": { opacity: "0" },
});

export const touchRippleClassName = style([
  theme,
  {
    position: "absolute",
    overflow: "hidden",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    transition: "background 1s ease-out",
  },
]);

export const touchRippleBackgroundClassName = recipe({
  base: {
    overflow: "hidden",
    background: background.color,
    width: `${maxRippleSize}px`,
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    position: "absolute",
    left: touchRipple.x,
    top: touchRipple.y,
    transform: "translate(-50%, -50%)",
  },
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
