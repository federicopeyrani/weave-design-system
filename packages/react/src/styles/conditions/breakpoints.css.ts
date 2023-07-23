import { mapValues } from "lodash";

import { ObjectKeys } from "@/utils/Types";

const breakpointValues = {
  compact: 0,
  medium: 600,
  expanded: 840,
};

type BreakpointValues = typeof breakpointValues;

const conditions = mapValues(breakpointValues, (value) => ({
  "@media": `(min-width: ${value}px)` as const,
}));

const defaultCondition = "compact" satisfies keyof BreakpointValues;

const responsiveArray = [
  "compact",
  "medium",
  "expanded",
] as const satisfies ObjectKeys<BreakpointValues>;

const breakpoints = {
  conditions,
  defaultCondition,
  responsiveArray,
} as const;

export default breakpoints;
