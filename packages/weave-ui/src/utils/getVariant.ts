const getVariant = <Variants extends string>(variants: {
  [key in Variants]?: boolean;
}): Variants | undefined =>
  Object.entries(variants).reduce<Variants | undefined>(
    (previous, [variant, selected]) =>
      selected ? (variant as Variants) : previous,
    undefined
  );

export default getVariant;
