import {
  forwardRef,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from "react";

import { ComponentType } from "@/model/ComponentType";
import { OutputStyledComponentProps } from "@/model/OutputStyledComponentProps";
import { StyleArgument } from "@/model/StyleArgument";
import styledComponentRenderProducer, {
  RefType,
} from "@/utils/styledComponentRenderProducer";

export interface StyledComponentProducer {
  <Arguments, Type extends ComponentType, Props>(
    producer: (props: Arguments) => string,
    styleKeys: readonly (keyof Arguments)[],
    as: Type,
    styleArgument: StyleArgument<Arguments, Props>
  ): StyledComponent<Arguments, Props>;
}

export type OutputProps<Arguments, Props> = PropsWithoutRef<
  OutputStyledComponentProps<Arguments, Props>
> &
  RefAttributes<RefType<Props>>;

export interface StyledComponent<Arguments, Props> {
  (props: OutputProps<Arguments, Props>): ReactElement | null;
}

const getAsComponentDisplayName = <Type extends ComponentType>(
  as: Type
): string => {
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

const styledComponentProducer: StyledComponentProducer = (
  producer,
  styleKeys,
  as,
  styleArgument
) => {
  const render = styledComponentRenderProducer(
    producer,
    styleKeys,
    as,
    styleArgument
  );

  const displayName = getAsComponentDisplayName(as);
  render.displayName = `Styled(${displayName})`;

  return forwardRef(render);
};

export default styledComponentProducer;
