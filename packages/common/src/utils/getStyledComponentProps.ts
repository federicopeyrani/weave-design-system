import { assignInlineVars } from "@vanilla-extract/dynamic";
import cx from "classix";
import { CSSProperties } from "react";

import {
  BaseStyledComponentProps,
  CanonicalBaseComponentProps,
  ComponentType,
  CreateStyledArguments,
  StyledArguments,
  StyledComponentProps,
} from "@/model";
import { asArray, parseStyleArgument, splitProps } from "@/utils";

const mergeStyles = (...styles: (CSSProperties | undefined)[]) =>
  styles.reduce((acc, style) => {
    if (!style) {
      return acc;
    }

    return { ...acc, ...style };
  }, {});

export const getStyledComponentProps = <
  Arguments,
  Type extends ComponentType<CanonicalBaseComponentProps>,
  InternalProps extends object,
  ExternalProps extends InternalProps
>(
  ...[resolver, styleKeys, , styleArgument, props]: [
    ...CreateStyledArguments<Arguments>,
    ...StyledArguments<Arguments, Type, InternalProps>,
    StyledComponentProps<Arguments, ExternalProps>
  ]
): CanonicalBaseComponentProps & ExternalProps => {
  // get parameters from styled-defined argument
  const {
    className: _className,
    styles: _styles,
    style: _style,
    ...otherStyleArguments
  } = parseStyleArgument(styleArgument, props as unknown as InternalProps);

  // get runtime parameters from props, split into style props and other props
  const [styleProps, { className, styles, style, ...otherProps }] = splitProps(
    props,
    styleKeys
  ) as [Arguments, BaseStyledComponentProps & ExternalProps];

  // resolve the class name to use by merging the styled-defined argument and the runtime argument
  const argumentStyledClassName = resolver({
    ...otherStyleArguments,
    ...styleProps,
  });

  // merge styles from styled-defined argument and runtime argument
  const derivedStyles = mergeStyles(
    _styles ? assignInlineVars(_styles) : undefined,
    styles ? assignInlineVars(styles) : undefined,
    _style,
    style
  );

  return {
    className: cx(
      ...asArray(_className),
      ...asArray(argumentStyledClassName),
      ...asArray(className)
    ),
    style: derivedStyles,
    ...(otherProps as ExternalProps),
  };
};
