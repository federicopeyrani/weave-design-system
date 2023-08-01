import { BaseStyledComponentProps } from "./BaseStyledComponentProps";
import { ClassNames } from "./ClassNames";

export type StyleArgument<Arguments, Props> =
  | ClassNames
  | ((props: Props) => ClassNames)
  | (BaseStyledComponentProps & Arguments)
  | ((props: Props) => BaseStyledComponentProps & Arguments)
  | undefined;
