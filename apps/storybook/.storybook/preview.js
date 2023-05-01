import { withThemeByClassName } from "@storybook/addon-styling";
import {
  coreThemeClassName,
  refDarkThemeClassName,
  refLightThemeClassName,
} from "weave-ui/src";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Light: `${coreThemeClassName} ${refLightThemeClassName}`,
        Dark: `${coreThemeClassName} ${refDarkThemeClassName}`,
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
