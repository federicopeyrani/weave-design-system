import type { Meta, StoryObj } from "@storybook/react";
import GrainyFilter from "@weave-ds/react/src/components/GrainyFilter/GrainyFilter";

export default {
  title: "Internal/GrainyFilter",
  component: GrainyFilter,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    baseFrequency: {
      control: "number",
      description:
        "Determines the density of the noise pattern. It controls the size of the individual noise pixels. Higher values result in a denser pattern. The default value is `0.65`.",
    },
    numOctaves: {
      control: "number",
      description:
        "Specifies the number of noise layers to generate. Each layer adds complexity to the noise pattern. Higher values result in a more intricate texture. The default value is `3`.",
    },
    amount: {
      control: "number",
      description:
        "Controls the intensity of the color adjustment applied to the noise. It affects the contrast and saturation of the resulting image. Higher values increase the contrast and saturation, while lower values reduce them. The default value is `20`.",
    },
    bias: {
      control: "number",
      description:
        "Adjusts the brightness of the final image. Negative values darken the image, while positive values lighten it. The default value is `-10`.",
    },
    size: { control: "number" },
    width: { control: "number" },
    height: { control: "number" },
    viewBoxSize: { control: "number" },
    viewBoxWidth: { control: "number" },
    viewBoxHeight: { control: "number" },
  },
} satisfies Meta<typeof GrainyFilter>;

type Story = StoryObj<typeof GrainyFilter>;

export const Default = {
  args: {
    baseFrequency: 0.65,
    numOctaves: 3,
    amount: 20,
    bias: -10,
    size: 200,
    viewBoxSize: 200,
  },
} satisfies Story;
