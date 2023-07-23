import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { ref } from "@/tokens/ref/index.css";

export const color = createThemeContract({
  color: null,
  onColor: null,
  colorContainer: null,
  onColorContainer: null,
});

const primary = createTheme(
  color,
  {
    color: ref.color.primary,
    onColor: ref.color.onPrimary,
    colorContainer: ref.color.primaryContainer,
    onColorContainer: ref.color.onPrimaryContainer,
  },
  "schemas_type_primary"
);

const secondary = createTheme(
  color,
  {
    color: ref.color.secondary,
    onColor: ref.color.onSecondary,
    colorContainer: ref.color.secondaryContainer,
    onColorContainer: ref.color.onSecondaryContainer,
  },
  "schemas_type_secondary"
);

const error = createTheme(
  color,
  {
    color: ref.color.error,
    onColor: ref.color.onError,
    colorContainer: ref.color.errorContainer,
    onColorContainer: ref.color.onErrorContainer,
  },
  "schemas_type_error"
);

export default { primary, secondary, error };
