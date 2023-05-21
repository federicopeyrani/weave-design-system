const getVariant = <Variants extends string>(
  variants: Record<Variants, boolean | undefined>
): Variants | undefined =>
  Object.entries(variants).reduce<Variants | undefined>(
    (previous, [variant, selected]) =>
      selected ? (variant as Variants) : previous,
    undefined
  );

export default getVariant;
