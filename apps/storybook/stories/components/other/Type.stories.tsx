import type { Meta, StoryObj } from "@storybook/react";
import { Type } from "@weave-ds/react/src/components";
import schemas from "@weave-ds/react/src/styles/schemas";

export default {
  title: "Components/Other/Type",
  component: Type,
  argTypes: {
    as: {
      control: "select",
      options: ["span", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    styles: { control: "object" },
    type: {
      control: "select",
      options: Object.keys(schemas.variants.type),
    },
    color: {
      control: "inline-radio",
      options: Object.keys(schemas.variants.color),
    },
  },
  render: ({ color, type, ...args }) => (
    <Type {...{ [color]: true }} {...{ [type]: true }} {...args} />
  ),
} satisfies Meta<typeof Type>;

type Story = StoryObj<typeof Type>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "bodyMedium",
    as: "span",
  },
};
