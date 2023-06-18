const typeScaleBreakpoints = [
  -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6,
] as const;

type TypeScaleBreakpoints = (typeof typeScaleBreakpoints)[number];

type SizeRem = `${number}rem`;

type Typescale<Name extends string> = {
  [key in TypeScaleBreakpoints as `${Name}${key}`]: SizeRem;
};

export const typescale = <Name extends string>(
  name: Name,
  base: number,
  factor: number
): Typescale<Name> => {
  const entries = typeScaleBreakpoints.map((breakpoint) => [
    `${name}${breakpoint}`,
    `${((base * Math.pow(factor, breakpoint)) / 16).toFixed(3)}rem`,
  ]);

  return Object.fromEntries(entries);
};
