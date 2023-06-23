import { ComponentProps, forwardRef, ReactDOM } from "react";

import BaseComponent, {
  StyledComponentProps,
} from "@/components/BaseComponent/BaseComponent";

type TypedBoxProps<Type extends keyof ReactDOM> = {
  as: Type;
} & ComponentProps<Type>;

type FallbackBoxProps = {
  as?: undefined;
} & ComponentProps<"div">;

export type BoxProps<Type extends keyof ReactDOM> = StyledComponentProps &
  (TypedBoxProps<Type> | FallbackBoxProps);

type BoxType = <Type extends keyof ReactDOM>(
  props: ComponentProps<Type>
) => JSX.Element;

const Box = <Type extends keyof ReactDOM>(
  props: BoxProps<Type>,
  ref: ComponentProps<Type>["ref"]
) => {
  const { as = "div", ...rest } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <BaseComponent as={as} _ref={ref} {...rest} />;
};

export default forwardRef(Box) as React.FC & BoxType;
