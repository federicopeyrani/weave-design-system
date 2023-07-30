import * as path from "path";

const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (baseConfig) => ({
    ...baseConfig,
    resolve: {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve.alias,
        "@weave-ds/react/src": path.resolve(
          __dirname,
          "../../../packages/react/src"
        ),
        "@": [
          path.resolve(__dirname, "../../../packages/react/src"),
          path.resolve(__dirname, "../../../packages/styled/src"),
          path.resolve(__dirname, "../../../packages/common/src"),
        ],
      },
    },
    plugins: [...baseConfig.plugins, new VanillaExtractPlugin()],
  }),
  docs: {
    autodocs: "tag",
  },
};

export default config;
