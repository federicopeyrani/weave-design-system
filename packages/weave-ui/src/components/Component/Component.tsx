import { cx } from "classix";
import {
  ComponentProps as ReactComponentProps,
  createElement,
  ReactHTML,
} from "react";

export type ComponentProps<Type extends keyof ReactHTML> =
  ReactComponentProps<Type> & {
    as: Type;
    baseClassName?: string;
  };

export const Component = <Type extends keyof ReactHTML>({
  as,
  baseClassName,
  className,
  ...props
}: ComponentProps<Type>) =>
  createElement(as, { className: cx(baseClassName, className), ...props });

export default Component;
