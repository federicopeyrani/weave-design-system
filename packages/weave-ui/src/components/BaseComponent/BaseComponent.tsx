import { assignInlineVars } from "@vanilla-extract/dynamic";
import { cx } from "classix";
import { createElement, forwardRef, HTMLAttributes, ReactDOM } from "react";

import { ClassNames } from "@/model/ClassNames";
import { Styles } from "@/model/Styles";
import styledComponentClassName, {
  StyledComponent,
  styledComponentProps,
} from "@/styles/styled/component.css";
import asArray from "@/utils/asArray";
import splitProps from "@/utils/splitProps";

interface ComponentArguments<Type extends keyof ReactDOM> {
  as: Type;
  _className?: BaseComponentProps["className"];
  _styles?: BaseComponentProps["styles"];
}

export interface BaseComponentProps {
  className?: ClassNames;
  styles?: Styles;
}

export interface StyledComponentProps
  extends BaseComponentProps,
    StyledComponent {}

export type ComponentAttributes<T> = Omit<HTMLAttributes<T>, "className">;

type RestrictedComponentProps<Type extends keyof ReactDOM> = Omit<
  JSX.IntrinsicElements[Type],
  keyof BaseComponentProps
>;

export type BaseComponentPropsInternal<Type extends keyof ReactDOM> =
  StyledComponentProps &
    RestrictedComponentProps<Type> &
    ComponentArguments<Type>;

interface BaseComponent extends React.FC<BaseComponentPropsInternal<never>> {
  <Type extends keyof ReactDOM>(
    props: BaseComponentPropsInternal<Type>
  ): JSX.Element;
}

const BaseComponent = forwardRef(function BaseComponentRender(
  {
    as,
    _className,
    className,
    _styles,
    styles,
    style,
    ...props
  }: BaseComponentPropsInternal<keyof ReactDOM>,
  ref
) {
  const [styledProps, otherProps] = splitProps(props, styledComponentProps);
  const sprinklesClassName = styledComponentClassName(styledProps);

  return createElement(as, {
    ref,
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
}) as BaseComponent;

export default BaseComponent;
