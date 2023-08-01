import { ComponentProps } from "react";

import { ComponentType } from "@/model/ComponentType";

import { BaseStyledComponentProps } from "./BaseStyledComponentProps";

export type RestrictedComponentProps<
  Type extends ComponentType<Props>,
  Props = ComponentProps<Type>
> = Omit<Props, keyof BaseStyledComponentProps>;
