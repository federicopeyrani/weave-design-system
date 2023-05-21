import { Meta, StoryObj } from "@storybook/react";
import { Button } from "weave-ui/src";

import { customPrimary } from "./Button.css";

export default {
  title: "Weave/Action/Button",
  component: Button,
  argTypes: {
    primary: { type: "boolean" },
    isDisabled: { type: "boolean" },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const defaultArgs: Story["args"] = {
  children: "Button",
  primary: false,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    primary: true,
  },
};

export const Custom: Story = {
  args: {
    ...Primary.args,
    className: customPrimary,
  },
};
