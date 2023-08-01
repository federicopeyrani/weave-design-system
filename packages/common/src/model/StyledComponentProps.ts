import { BaseStyledComponentProps } from "./BaseStyledComponentProps";

export type StyledComponentProps<Arguments, Props> = BaseStyledComponentProps &
  Omit<Props, keyof BaseStyledComponentProps> &
  Arguments;
