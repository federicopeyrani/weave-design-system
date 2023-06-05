import type { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export type Require<T> = Exclude<T, undefined>;

// T: Array<string>
// Output: string
export type ArrayType<T extends Array<unknown>> = T extends Array<infer U>
  ? U
  : never;

// T: { a: string, b: number }
// Output: string | number
export type ValuesOf<T extends Record<string | number | symbol, unknown>> =
  T extends Record<string | number | symbol, infer V> ? V : never;

// Variants: "primary" | "secondary"
// Output: { primary: true, secondary?: false } | { primary?: false, secondary: true }
export type VariantSelector<Variants extends string> = {
  [Variant in Variants]: {
    [key in Variants]?: key extends Variant ? true : false;
  };
}[Variants];

export type RecipeVariantsNames<
  T extends ReturnType<typeof recipe>,
  Key extends keyof Require<RecipeVariants<T>>
> = Require<Require<RecipeVariants<T>>[Key]>;

export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type MapLeaves<T, V> = T extends object
  ? { [P in keyof T]: MapLeaves<T[P], V> }
  : V;
