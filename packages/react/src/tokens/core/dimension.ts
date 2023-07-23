const gridSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export type GridSize = (typeof gridSize)[number];

type SizeRem = `${number}rem`;

type Scale<Name extends string> = {
  [key in GridSize as `${Name}${key}`]: SizeRem;
};

export const scale = <Name extends string>(
  name: Name,
  size: number
): Scale<Name> => {
  const entries = gridSize.map((breakpoint) => [
    `${name}${breakpoint}`,
    `${(breakpoint * size) / 16}rem`,
  ]);

  return Object.fromEntries(entries);
};
