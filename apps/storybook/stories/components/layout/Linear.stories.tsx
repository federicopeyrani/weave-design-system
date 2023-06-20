import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "weave-ui/src";
import {
  Column as ColumnComponent,
  Row as RowComponent,
} from "weave-ui/src/components";
import { BaseComponentProps } from "weave-ui/src/components/BaseComponentProps";
import Component from "weave-ui/src/components/Component/Component";

const Element: React.FC<BaseComponentProps> = (props) => (
  <Component as="div" {...props} />
);

const palette = Object.entries(tokens.core.palette)
  .filter(([key]) => key.startsWith("primary"))
  .map(([, value]) => value);

export default {
  title: "Components/Layout/Linear",
  subcomponents: { Row: RowComponent, Column: ColumnComponent },
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "inline-radio",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    wrap: {
      control: "inline-radio",
      options: [true, false],
    },
  },
} satisfies Meta<typeof RowComponent | typeof ColumnComponent>;

type Story = StoryObj<typeof RowComponent | typeof ColumnComponent>;

export const Row = {
  render: function Render(args) {
    return (
      <RowComponent {...args}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Element
            key={i}
            styles={{
              minHeight: 48 * (i + 1),
              minWidth: 48,
              background: `rgb(${palette[i]})`,
            }}
          />
        ))}
      </RowComponent>
    );
  },
} satisfies Story;

export const Column = {
  render: function Render(args) {
    return (
      <ColumnComponent {...args}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Element
            key={i}
            styles={{
              minHeight: 48,
              minWidth: 48 * (i + 1),
              background: `rgb(${palette[i]})`,
            }}
          />
        ))}
      </ColumnComponent>
    );
  },
} satisfies Story;
