import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "weave-ui/src";

import { customFilled } from "./Button.css";

export default {
  title: "Weave/Action/Button",
  component: Button,
  argTypes: {
    filled: { type: "boolean" },
    tonal: { type: "boolean" },
    text: { type: "boolean" },
    primary: { type: "boolean" },
    secondary: { type: "boolean" },
    labelSmall: { type: "boolean" },
    labelMedium: { type: "boolean" },
    labelLarge: { type: "boolean" },
    isDisabled: { type: "boolean" },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const defaultArgs: Story["args"] = {
  children: "Button",
  filled: false,
  tonal: false,
  text: false,
};

export const Filled: Story = {
  args: {
    ...defaultArgs,
    filled: true,
  },
};

export const Tonal: Story = {
  args: {
    ...defaultArgs,
    tonal: true,
  },
};

export const Text: Story = {
  args: {
    ...defaultArgs,
    text: true,
  },
};

export const Custom: Story = {
  args: {
    ...Filled.args,
    className: customFilled,
  },
};
