import { assignInlineVars } from "@vanilla-extract/dynamic";
import { cx } from "classix";
import { omit, pick } from "lodash";
import { ComponentProps, createElement, ReactDOM } from "react";

import { ClassNames } from "@/model/ClassNames";
import { Styles } from "@/model/Styles";
import styledComponentClassName, {
  StyledComponent,
  styledComponentProps,
} from "@/styles/styled/component.css";
import asArray from "@/utils/asArray";

type ComponentArguments<Type extends keyof ReactDOM> = {
  as: Type;
  _ref?: ComponentProps<Type>["ref"];
  _className?: BaseComponentProps["className"];
  _styles?: BaseComponentProps["styles"];
};

export type BaseComponentProps = {
  className?: ClassNames;
  styles?: Styles;
};

export type StyledComponentProps = BaseComponentProps & StyledComponent;

export type BaseComponentPropsInternal<Type extends keyof ReactDOM> =
  StyledComponentProps &
    Omit<ComponentProps<Type>, "ref" | "className"> &
    ComponentArguments<Type>;

export type BaseComponentType = <Type extends keyof ReactDOM>(
  props: BaseComponentPropsInternal<Type>
) => JSX.Element;

const splitStyledComponentProps = <T extends Record<string, unknown>>(
  props: T
) => {
  const styledProps = pick(props, styledComponentProps);
  const otherProps = omit(props, styledComponentProps);

  return [styledProps, otherProps] as const;
};

const BaseComponent: BaseComponentType = ({
  as,
  _ref,
  _className,
  className,
  _styles,
  styles,
  style,
  ...props
}) => {
  const [styledProps, otherProps] = splitStyledComponentProps(props);
  const sprinklesClassName = styledComponentClassName(styledProps);

  return createElement(as, {
    ref: _ref,
    className: cx(
      ...asArray(_className),
      sprinklesClassName,
      ...asArray(className)
    ),
    style:
      _styles || styles
        ? {
            ...assignInlineVars({
              ...(styles || {}),
              ...(_styles || {}),
            }),
            ...style,
          }
        : style,
    ...otherProps,
  });
};

export default BaseComponent;
