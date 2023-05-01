import { Meta, StoryObj } from "storybook";
import { PrimaryButton } from "weave-ui/src";

export default {
  title: "Weave/Action/Button",
  component: PrimaryButton,
  argTypes: {
    isDisabled: { type: "boolean" },
  },
} satisfies Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  component: PrimaryButton,
  args: {
    children: "Button",
  },
};
