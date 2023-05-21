import type { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export type Require<T> = Exclude<T, undefined>;

export type ValuesOf<T extends Record<never, never>> = T extends Record<
  string | number | symbol,
  infer V
>
  ? V
  : never;

export type VariantSelector<Variants extends string> = {
  [Variant in Variants]: {
    [key in Variants]?: key extends Variant ? true : false;
  };
}[Variants];

export type RecipeVariantsNames<
  T extends ReturnType<typeof recipe>,
  Key extends keyof Require<RecipeVariants<T>>
> = Require<Require<RecipeVariants<T>>[Key]>;
