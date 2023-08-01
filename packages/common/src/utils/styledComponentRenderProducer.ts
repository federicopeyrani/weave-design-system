import { createElement, ForwardRefRenderFunction, Ref } from "react";

import {
  CanonicalBaseComponentProps,
  ComponentType,
  CreateStyledArguments,
  StyledArguments,
  StyledComponentProps,
} from "@/model";

import { getStyledComponentProps } from "./getStyledComponentProps";

export type RefType<Props> = Props extends { ref?: string | Ref<infer R> }
  ? R
  : never;

export type StyledComponentRender<Arguments, Props> = ForwardRefRenderFunction<
  RefType<Props>,
  StyledComponentProps<Arguments, Props>
>;

export const styledComponentRenderProducer = <
  Arguments,
  Type extends ComponentType<CanonicalBaseComponentProps>,
  InternalProps extends object,
  ExternalProps extends InternalProps
>(
  ...[resolver, styleKeys, as, ...args]: [
    ...CreateStyledArguments<Arguments>,
    ...StyledArguments<Arguments, Type, InternalProps>
  ]
): StyledComponentRender<Arguments, ExternalProps> =>
  function StyledComponentRender(props, ref) {
    const parsedProps = getStyledComponentProps<
      Arguments,
      Type,
      InternalProps,
      ExternalProps
    >(resolver, styleKeys, as, ...args, props);

    return createElement(as, { ref, ...parsedProps });
  };
