import { CanonicalBaseComponentProps } from "@/model/CanonicalBaseComponentProps";
import { ClassNames } from "@/model/ClassNames";
import { ComponentType } from "@/model/ComponentType";
import { StyleArgument } from "@/model/StyleArgument";

export type CreateStyledArguments<Arguments> = [
  resolver: (args: Arguments) => ClassNames,
  styleKeys: readonly (keyof Arguments)[]
];

export type StyledArguments<
  Arguments,
  Type extends ComponentType<CanonicalBaseComponentProps>,
  Props
> = [as: Type, styleArgument?: StyleArgument<Arguments, Props>];
