export function splitProps<Props extends object, R extends keyof Props>(
  props: Props,
  filter: readonly R[]
): readonly [Pick<Props, R>, Omit<Props, R>];

export function splitProps<
  Props extends object,
  R extends { [K in keyof Props]?: unknown }
>(
  props: Props,
  filter: R
): readonly [
  Pick<
    Props,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    keyof R
  >,
  Omit<Props, keyof R>
];

export function splitProps<
  Props extends object,
  R extends Partial<Record<keyof Props, unknown>> | (keyof Props)[]
>(
  props: Props,
  filter: R
): readonly [
  Pick<
    Props,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    keyof R
  >,
  Omit<Props, keyof R>
] {
  const pickedProps = {} as Pick<
    Props,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    keyof R
  >;
  const filteredProps = {} as Omit<Props, keyof R>;

  const filterObject = Array.isArray(filter)
    ? filter.reduce(
        (acc, key) => ({ ...acc, [key]: "any" }),
        {} as Record<string, unknown>
      )
    : (filter as Record<string, unknown>);

  Object.entries(props).forEach(([key, value]) => {
    if (filterObject[key] !== undefined) {
      pickedProps[key as keyof typeof pickedProps] = value;
      return;
    }

    filteredProps[key as keyof typeof filteredProps] = value;
  });

  return [pickedProps, filteredProps];
}
