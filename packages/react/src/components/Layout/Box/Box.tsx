import { forwardRef, ReactDOM } from "react";

import BaseComponent from "@/components/BaseComponent/BaseComponent";
import {
  OverridableComponent,
  OverridableComponentProps,
} from "@/model/OverridableComponent";

export type BoxProps<Type extends keyof ReactDOM = "div"> =
  OverridableComponentProps<"div", Type>;

type Box = OverridableComponent<"div">;

const Box = forwardRef<HTMLDivElement, BoxProps>(function BoxRender(
  props,
  ref
) {
  const { as = "div", ...rest } = props;
  return <BaseComponent as={as} ref={ref} {...rest} />;
}) as Box;

export default Box;
