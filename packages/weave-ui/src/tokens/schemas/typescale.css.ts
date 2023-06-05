import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { ref } from "@/tokens/ref/index.css";

export const type = createThemeContract(ref.type.labelMedium);

const entries = Object.entries(ref.type).map(
  ([key, value]) =>
    [
      key as keyof typeof ref.type,
      createTheme(type, value, `schemas_type_${key}`),
    ] as const
);

export default Object.fromEntries(entries) as {
  [key in keyof typeof ref.type]: ReturnType<typeof createTheme>;
};
