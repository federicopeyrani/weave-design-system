import { forwardRef, ReactElement } from "react";

import {
  CanonicalBaseComponentProps,
  CreateStyledArguments,
  ForwardedRefStyledComponentProps,
  StyledArguments,
} from "@/model";
import { ComponentType } from "@/model/ComponentType";
import { styledComponentRenderProducer } from "@/utils/styledComponentRenderProducer";

export interface StyledComponent<Arguments, Props> {
  (
    props: ForwardedRefStyledComponentProps<Arguments, Props>
  ): ReactElement | null;
}

const getAsComponentDisplayName = <Props>(as: ComponentType<Props>): string => {
  if (typeof as === "string") {
    return as;
  }

  if (
    typeof as === "function" &&
    "displayName" in as &&
    typeof as.displayName === "string"
  ) {
    return as.displayName;
  }

  return "Component";
};

export const styledComponentProducer = <
  Arguments,
  Type extends ComponentType<CanonicalBaseComponentProps>,
  InternalProps extends object,
  ExternalProps extends InternalProps
>(
  ...args: [
    ...CreateStyledArguments<Arguments>,
    ...StyledArguments<Arguments, Type, InternalProps>
  ]
): StyledComponent<Arguments, ExternalProps> => {
  const render = styledComponentRenderProducer<
    Arguments,
    Type,
    InternalProps,
    ExternalProps
  >(...args);

  const [, , as] = args;

  const displayName = getAsComponentDisplayName(as);
  render.displayName = `Styled(${displayName})`;

  return forwardRef(render);
};
