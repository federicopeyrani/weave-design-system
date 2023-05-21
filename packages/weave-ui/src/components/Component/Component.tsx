import { cx } from "classix";
import {
  ComponentProps as ReactComponentProps,
  createElement,
  ReactHTML,
} from "react";

export type ComponentProps<Type extends keyof ReactHTML> =
  ReactComponentProps<Type> & {
    as: Type;
    _ref?: ComponentProps<Type>["ref"];
    _className?: string;
  };

export const Component = <Type extends keyof ReactHTML>({
  as,
  _ref,
  _className,
  className,
  ...props
}: ComponentProps<Type>) =>
  createElement(as, {
    ref: _ref,
    className: cx(_className, className),
    ...props,
  });

export default Component;
