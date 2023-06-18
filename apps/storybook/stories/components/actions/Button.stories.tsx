import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "weave-ui/src";
import { Button } from "weave-ui/src/components";

export default {
  title: "Components/Actions/Button",
  component: Button,
  argTypes: {
    styles: { control: "object" },
    variant: {
      options: ["filled", "tonal", "text"],
      control: "inline-radio",
    },
    color: {
      options: ["primary", "secondary", "error"],
      control: "inline-radio",
    },
    type: {
      control: "select",
      options: ["labelSmall", "labelMedium", "labelLarge"],
    },
    isDisabled: { type: "boolean" },
    // actions
    onPress: { action: "onClick" },
    onPressStart: { action: "onPressStart" },
    onPressEnd: { action: "onPressEnd" },
  },
  render: ({ variant, color, type, ...args }) => (
    <Button
      {...{ [variant]: true }}
      {...{ [color]: true }}
      {...{ [type]: true }}
      {...args}
    />
  ),
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const defaultArgs: Story["args"] = {
  children: "Button",
  variant: undefined,
  color: undefined,
  type: "labelMedium",
  isDisabled: false,
};

export const Filled: Story = {
  args: {
    ...defaultArgs,
    variant: "filled",
    color: "primary",
  },
};

export const Tonal: Story = {
  args: {
    ...defaultArgs,
    variant: "tonal",
    color: "secondary",
  },
};

export const Text: Story = {
  args: {
    ...defaultArgs,
    variant: "text",
    color: "primary",
  },
};

export const Custom: Story = {
  args: {
    ...Filled.args,
    styles: {
      [tokens.comp.filledButton.container.color]: "255 0 0",
      [tokens.comp.filledButton.label.color]: "0 0 255",
      [tokens.comp.filledButton.label.weight]: "800",
      [tokens.comp.filledButton.pressed.ripple.color]: "0 0 255",
    },
  },
};
