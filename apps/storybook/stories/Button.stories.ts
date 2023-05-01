import { Meta, StoryObj } from "storybook";
import { Button } from "weave-ui";

export default {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
