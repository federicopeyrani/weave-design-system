import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import schemas from "@/styles/schemas";

export const variants = {
  direction: {
    row: { flexDirection: "row" },
    column: { flexDirection: "column" },
  },
  align: {
    start: { alignItems: "flex-start" },
    center: { alignItems: "center" },
    end: { alignItems: "flex-end" },
    stretch: { alignItems: "stretch" },
  },
  justify: {
    start: { justifyContent: "flex-start" },
    center: { justifyContent: "center" },
    end: { justifyContent: "flex-end" },
    between: { justifyContent: "space-between" },
    around: { justifyContent: "space-around" },
    evenly: { justifyContent: "space-evenly" },
  },
  wrap: {
    true: { flexWrap: "wrap" },
    false: { flexWrap: "nowrap" },
  },
} as const;

export const linearClassName = recipe({
  base: {
    display: "flex",
    gap: schemas.tokens.dimension,
  },
  variants,
});

export type LinearClassName = RecipeVariants<typeof linearClassName>;
