import { withThemeByClassName } from "@storybook/addon-styling";

import { styles } from "@weave-ds/react/src";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Light: styles({ theme: "light" }),
        Dark: styles({ theme: "dark" }),
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
