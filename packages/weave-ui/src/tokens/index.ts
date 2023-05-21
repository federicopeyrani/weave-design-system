export { createCompTheme, createCompVariantOverride } from "./comp";
export { tonalPalette } from "./core/color";
export { coreThemeClassName } from "@/tokens/core/index.css";
export {
  refDarkThemeClassName,
  refLightThemeClassName,
} from "@/tokens/ref/index.css";

import { core } from "@/tokens/core/index.css";
import { ref } from "@/tokens/ref/index.css";

const tokens = { core, ref };
export { compThemeClassName } from "./comp/index.css";

export default tokens;
