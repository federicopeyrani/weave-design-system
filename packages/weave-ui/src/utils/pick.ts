export default function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>;

export default function pick<
  T extends object,
  R extends Partial<Record<keyof T, unknown>>
>(
  obj: T,
  filterObj: R
): // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Pick<T, keyof R>;

export default function pick<T extends object, K extends keyof T>(
  obj: T,
  keysOrFilterObj: K[] | Partial<Record<keyof T, unknown>>
) {
  if (Array.isArray(keysOrFilterObj)) {
    const entries = Object.entries(obj).filter(([key]) =>
      keysOrFilterObj.includes(key as K)
    );

    return Object.fromEntries(entries);
  }

  const filterObjKeys = Object.entries(keysOrFilterObj)
    .filter(([, value]) => value !== undefined)
    .map(([key]) => key);

  return pick(obj, filterObjKeys as K[]);
}
