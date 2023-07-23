const fromEntries = <Key extends PropertyKey, Value>(
  entries: Iterable<readonly [Key, Value]>
) => Object.fromEntries(entries) as { [key in Key]: Value };

export const duration = <
  Prefix extends string,
  Names extends readonly string[],
  Blocks extends readonly string[]
>(
  prefix: Prefix,
  names: Names,
  blocks: Blocks,
  interval: number
) => {
  const entries = names.flatMap((name: Names[number], nameIndex) =>
    blocks.map(
      (block: Blocks[number], blockIndex) =>
        [
          `${prefix}${name}${block}`,
          `${interval * (nameIndex * blocks.length + (blockIndex + 1))}ms`,
        ] as const
    )
  );

  return fromEntries(entries);
};
