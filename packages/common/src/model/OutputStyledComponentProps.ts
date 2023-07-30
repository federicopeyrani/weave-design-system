import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";

export type OutputStyledComponentProps<Arguments, Props> =
  BaseStyledComponentProps & Props & Arguments;
