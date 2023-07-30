import { Meta, StoryObj } from "@storybook/react";
import TextField from "@weave-ds/react/src/components/TextField/TextField";

export default {
  title: "Components/Selection/TextField",
  component: TextField,
  argTypes: {
    isReadOnly: { control: "boolean" },
  },
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    className: "w-full",
    label: "Label",
    placeholder: "Placeholder",
    isReadOnly: false,
    isDisabled: false,
  },
};
