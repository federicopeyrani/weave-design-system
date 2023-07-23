import { RemSize, SizeUnit } from "@/model/Size";

const typeScaleBreakpoints = [
  -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
] as const;

type TypeScaleBreakpoints = (typeof typeScaleBreakpoints)[number];

type Typescale<Name extends string> = {
  [key in TypeScaleBreakpoints as `${Name}${key}`]: RemSize;
};

export const typescale = <Name extends string>(
  name: Name,
  base: number,
  scale: number,
  unit: SizeUnit = "rem",
  precision = 2
) => {
  const entries = typeScaleBreakpoints.map((breakpoint) => {
    const scaledSize = base * Math.pow(scale, breakpoint);
    return [
      `${name}${breakpoint}`,
      `${scaledSize.toFixed(precision)}${unit}`,
    ] as const;
  });

  return Object.fromEntries(entries) as Typescale<Name>;
};
