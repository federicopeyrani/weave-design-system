import "weave-ui/index.css";
import { withThemeByClassName } from "@storybook/addon-styling";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Light: "weave-core weave-light",
        Dark: "weave-core weave-dark",
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
