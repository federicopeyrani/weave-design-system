import { withThemeByClassName } from "@storybook/addon-styling";
import {
  coreThemeClassName,
  refDarkThemeClassName,
  refLightThemeClassName,
  compThemeClassName,
} from "weave-ui/src";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Light: `${coreThemeClassName} ${refLightThemeClassName} ${compThemeClassName}`,
        Dark: `${coreThemeClassName} ${refDarkThemeClassName} ${compThemeClassName}`,
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
