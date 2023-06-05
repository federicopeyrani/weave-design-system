import { createTheme, createThemeContract } from "@vanilla-extract/css";

import { ref } from "@/tokens/ref/index.css";

export const color = createThemeContract({
  color: null,
  onColor: null,
  colorContainer: null,
});

const primary = createTheme(
  color,
  {
    color: ref.color.primary,
    onColor: ref.color.onPrimary,
    colorContainer: ref.color.primaryContainer,
  },
  "schemas_type_primary"
);

const secondary = createTheme(
  color,
  {
    color: ref.color.secondary,
    onColor: ref.color.onSecondary,
    colorContainer: ref.color.secondaryContainer,
  },
  "schemas_type_secondary"
);

export default { primary, secondary };
