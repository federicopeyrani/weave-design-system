import { cx } from "classix";
import {
  ComponentProps as ReactComponentProps,
  createElement,
  ReactHTML,
} from "react";

import type { BaseComponentProps } from "@/components/BaseComponentProps";
import asArray from "@/utils/asArray";

type ComponentArguments<Type extends keyof ReactHTML> = {
  as: Type;
  _ref?: ReactComponentProps<Type>["ref"];
  _className?: BaseComponentProps["className"];
};

export type ComponentProps<Type extends keyof ReactHTML> = Omit<
  ReactComponentProps<Type>,
  "ref" | "className"
> &
  BaseComponentProps &
  ComponentArguments<Type>;

export const Component = <Type extends keyof ReactHTML>({
  as,
  _ref,
  _className,
  className,
  ...props
}: ComponentProps<Type>) =>
  createElement(as, {
    ref: _ref,
    className: cx(...asArray(_className), ...asArray(className)),
    ...props,
  });

export default Component;
