import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { app } from "@/tokens/app/index.css";

export const color = createThemeContract({
  color: null,
  onColor: null,
  colorContainer: null,
  onColorContainer: null,
});

const primary = createTheme(
  color,
  {
    color: app.color.primary,
    onColor: app.color.onPrimary,
    colorContainer: app.color.primaryContainer,
    onColorContainer: app.color.onPrimaryContainer,
  },
  "schemas_type_primary"
);

const secondary = createTheme(
  color,
  {
    color: app.color.secondary,
    onColor: app.color.onSecondary,
    colorContainer: app.color.secondaryContainer,
    onColorContainer: app.color.onSecondaryContainer,
  },
  "schemas_type_secondary"
);

const error = createTheme(
  color,
  {
    color: app.color.error,
    onColor: app.color.onError,
    colorContainer: app.color.errorContainer,
    onColorContainer: app.color.onErrorContainer,
  },
  "schemas_type_error"
);

export default { primary, secondary, error };
