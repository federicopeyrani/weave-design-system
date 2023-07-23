import { DeepPartial } from "@/utils/Types";

type DeepObjectValue = string | number | boolean;

export type DeepObject = {
  [key: string | number | symbol]: DeepObject | DeepObjectValue;
};

export default function deepMerge<
  T extends DeepObject,
  K extends DeepPartial<T>
>(base: T, overrides: K): T {
  const result = { ...base };

  Object.entries(overrides).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }

    const baseValue = base[key];
    if (typeof value === "object" && typeof baseValue === "object") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (result[key] = deepMerge(baseValue, value));
    }

    if (typeof value === "object" || typeof baseValue === "object") {
      throw Error("Supplied overrides do not match base theme's structure");
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result[key] = value;
  });

  return result as T;
}
