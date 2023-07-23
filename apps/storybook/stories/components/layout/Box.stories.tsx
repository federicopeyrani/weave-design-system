import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@weave-ds/react/src";
import { Box } from "@weave-ds/react/src/components";
import {
  responsiveProperties,
  staticProperties,
} from "@weave-ds/react/src/styles/styled/component.css";
import { mapValues } from "lodash";

export default {
  title: "Components/Layout/Box",
  component: Box,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...mapValues(responsiveProperties.styles, ({ values }) => ({
      control: "inline-radio",
      options: Object.keys(values),
    })),
    ...mapValues(staticProperties.styles, ({ values }) => ({
      control: "inline-radio",
      options: Object.keys(values),
    })),
  },
  render: (args) => (
    <Box
      style={{ background: `rgb(${tokens.ref.color.primaryContainer})` }}
      {...args}
    >
      <Box
        style={{
          background: `rgb(${tokens.ref.color.onPrimaryContainer})`,
          width: 200,
          height: 200,
        }}
      />
    </Box>
  ),
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    width: "min",
    height: "min",
    m: 0,
    p: 2,
  },
};
