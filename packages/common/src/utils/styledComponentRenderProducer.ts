import { createElement, ForwardRefRenderFunction, Ref } from "react";

import { ComponentType } from "@/model/ComponentType";
import { OutputStyledComponentProps } from "@/model/OutputStyledComponentProps";
import { StyleArgument } from "@/model/StyleArgument";
import getStyledComponentProps from "@/utils/getStyledComponentProps";

export type RefType<Props> = Props extends { ref?: string | Ref<infer R> }
  ? R
  : never;

export type StyledComponentRender<Arguments, Props> = ForwardRefRenderFunction<
  RefType<Props>,
  OutputStyledComponentProps<Arguments, Props>
>;

export type StyledComponentRenderProducer = <
  Arguments,
  Type extends ComponentType,
  Props
>(
  producer: (props: Arguments) => string,
  styleKeys: readonly (keyof Arguments)[],
  as: Type,
  styleArgument: StyleArgument<Arguments, Props>
) => StyledComponentRender<Arguments, Props>;

const styledComponentRenderProducer: StyledComponentRenderProducer = (
  producer,
  styleKeys,
  as,
  styleArgument
) =>
  function StyledComponentRender(props, ref) {
    const parsedProps = getStyledComponentProps(
      producer,
      styleKeys,
      styleArgument,
      props
    );

    return createElement(as, { ref, ...parsedProps });
  };

export default styledComponentRenderProducer;
