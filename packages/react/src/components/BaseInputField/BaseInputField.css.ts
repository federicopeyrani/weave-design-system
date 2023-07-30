import { createThemeContract, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const baseInputFieldContract = createThemeContract({
  label: {
    margin: null,
    clear: null,
  },
});

export const baseInputFieldClassName = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const containerClassName = style({
  position: "relative",
  width: "inherit",
  height: "inherit",
  borderStyle: "solid",
  borderColor: "transparent",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const labelClassName = recipe({
  base: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: `calc(100% - ${baseInputFieldContract.label.margin} * 2)`,
  },
  variants: {
    state: {
      floating: {
        top: 0,
        left: baseInputFieldContract.label.margin,
      },
    },
  },
});

export const fieldsetClassName = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0,
  pointerEvents: "none",
  minWidth: 0,
  borderRadius: "inherit",
  padding: `0 calc(${baseInputFieldContract.label.margin} - ${baseInputFieldContract.label.clear})`,
});

export const fieldsetLabelClassName = recipe({
  base: {
    maxWidth: 0,
    visibility: "hidden",
    pointerEvents: "none",
    padding: 0,
    overflow: "hidden",
    width: "auto",
    display: "block",
    whiteSpace: "nowrap",
    float: "unset",
    height: "1px",
  },
  variants: {
    state: {
      floating: {
        maxWidth: "100%",
      },
    },
  },
});
