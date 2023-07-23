import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { app } from "@/tokens/app/index.css";

export const type = createThemeContract(app.type.labelMedium);

const entries = Object.entries(app.type).map(
  ([key, value]) =>
    [
      key as keyof typeof app.type,
      createTheme(type, value, `schemas_type_${key}`),
    ] as const
);

export default Object.fromEntries(entries) as {
  [key in keyof typeof app.type]: ReturnType<typeof createTheme>;
};
