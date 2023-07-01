import { forwardRef, ReactDOM, ReactElement } from "react";

import BaseComponent, {
  StyledComponentProps,
} from "@/components/BaseComponent/BaseComponent";

export type BoxProps<
  Type extends keyof ReactDOM = "div",
  Props = JSX.IntrinsicElements[Type]
> = StyledComponentProps &
  Props &
  (Type extends "div" ? { as?: Type } : { as: Type });

const Box = forwardRef<HTMLDivElement, BoxProps>(function BoxRender(
  props,
  ref
) {
  const { as = "div", ...rest } = props;
  return <BaseComponent as={as} ref={ref} {...rest} />;
}) as <
  Type extends keyof ReactDOM = "div",
  Props = JSX.IntrinsicElements[Type]
>(
  props: BoxProps<Type, Props>
) => ReactElement;

export default Box;
