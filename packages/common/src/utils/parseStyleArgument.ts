import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";
import { StyleArgument } from "@/model/StyleArgument";

export const parseStyleArgument = <Arguments, Props>(
  styleArgument: StyleArgument<Arguments, Props>,
  props: Props
): BaseStyledComponentProps | (BaseStyledComponentProps & Arguments) => {
  if (
    styleArgument === null ||
    styleArgument === undefined ||
    typeof styleArgument === "string" ||
    typeof styleArgument === "boolean" ||
    Array.isArray(styleArgument)
  ) {
    return { className: styleArgument, styles: undefined };
  }

  if (typeof styleArgument === "object") {
    return styleArgument;
  }

  const output = styleArgument(props);
  return parseStyleArgument(output, props);
};
