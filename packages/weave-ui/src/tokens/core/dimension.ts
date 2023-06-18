const breakpoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

type Breakpoints = (typeof breakpoints)[number];

type SizeRem = `${number}rem`;

type Scale<Name extends string> = {
  [key in Breakpoints as `${Name}${key}`]: SizeRem;
};

export const scale = <Name extends string>(
  name: Name,
  size: number
): Scale<Name> => {
  const entries = breakpoints.map((breakpoint) => [
    `${name}${breakpoint}`,
    `${(breakpoint * size) / 16}rem`,
  ]);

  return Object.fromEntries(entries);
};
