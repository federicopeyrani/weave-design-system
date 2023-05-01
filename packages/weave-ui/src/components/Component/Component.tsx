import { cx } from "classix";
import {
  ComponentProps as ReactComponentProps,
  createElement,
  ReactHTML,
} from "react";

export type ComponentProps<Type extends keyof ReactHTML> =
  ReactComponentProps<Type> & {
    as: Type;
    elementRef?: ComponentProps<Type>["ref"];
    baseClassName?: string;
  };

export const Component = <Type extends keyof ReactHTML>({
  as,
  elementRef,
  baseClassName,
  className,
  ...props
}: ComponentProps<Type>) =>
  createElement(as, {
    ref: elementRef,
    className: cx(baseClassName, className),
    ...props,
  });

export default Component;
