import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "weave-ui/src";
import TouchRipple from "weave-ui/src/components/TouchRipple/TouchRipple";

export default {
  title: "Internal/TouchRipple",
  component: TouchRipple,
  argTypes: {
    disableAnimate: { type: "boolean" },
    x: { control: "number" },
    y: { control: "number" },
    size: { control: "number" },
  },
} satisfies Meta<typeof TouchRipple>;

type Story = StoryObj<typeof TouchRipple>;

export const Default = {
  args: {
    disableAnimate: true,
    x: "50%",
    y: "50%",
    size: 200,
  },
  render: function Render(args) {
    return (
      <div
        style={{
          width: args.size / 2,
          height: args.size / 2,
          position: "relative",
          background: `rgb(${tokens.ref.color.primary} / 1)`,
          overflow: "hidden",
        }}
      >
        <TouchRipple {...args} />
      </div>
    );
  },
} satisfies Story;
