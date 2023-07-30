import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";
import { ClassNames } from "@/model/ClassNames";

export type StyleArgument<Arguments, Props> =
  | ClassNames
  | ((props: Props) => ClassNames)
  | (BaseStyledComponentProps & Arguments)
  | ((props: Props) => BaseStyledComponentProps & Arguments)
  | undefined;
