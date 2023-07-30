import { assignInlineVars } from "@vanilla-extract/dynamic";
import cx from "classix";
import { CSSProperties } from "react";

import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";
import { OutputStyledComponentProps } from "@/model/OutputStyledComponentProps";
import { StyleArgument } from "@/model/StyleArgument";
import { asArray, splitProps } from "@/utils/index";
import parseStyleArgument from "@/utils/parseStyleArgument";

const mergeStyles = (...styles: (CSSProperties | undefined)[]) =>
  styles.reduce((acc, style) => {
    if (!style) {
      return acc;
    }

    return { ...acc, ...style };
  }, {});

const getStyledComponentProps = <Arguments, Props>(
  producer: (props: Arguments) => string,
  styleKeys: readonly (keyof Arguments)[],
  styleArgument: StyleArgument<Arguments, Props>,
  props: OutputStyledComponentProps<Arguments, Props>
): BaseStyledComponentProps & Props => {
  const {
    className: _className,
    styles: _styles,
    ...otherStyleArguments
  } = parseStyleArgument(styleArgument, props);

  const [styleProps, { className, styles, style, ...otherProps }] = splitProps(
    props,
    styleKeys
  ) as [Arguments, BaseStyledComponentProps & Props];

  const argumentStyledClassName = producer({
    ...otherStyleArguments,
    ...styleProps,
  });

  const derivedStyles = mergeStyles(
    _styles ? assignInlineVars(_styles) : undefined,
    styles ? assignInlineVars(styles) : undefined,
    style
  );

  return {
    className: cx(
      ...asArray(_className),
      argumentStyledClassName,
      ...asArray(className)
    ),
    style: derivedStyles,
    ...otherProps,
  } as BaseStyledComponentProps & Props;
};

export default getStyledComponentProps;
